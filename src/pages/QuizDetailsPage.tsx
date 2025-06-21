
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

const QuizDetailsPage = () => {
  const { quizId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizData = {
    title: "Customer Onboarding Knowledge Check",
    description: "Test your understanding of the customer onboarding process",
    sopTitle: "Customer Onboarding Process",
    timeLimit: "15 minutes",
    passingScore: "80%",
    questions: [
      {
        id: 1,
        question: "What is the first step in the customer onboarding process?",
        options: [
          "Requirements Analysis",
          "Initial Contact", 
          "Solution Presentation",
          "Contract Negotiation"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What information should be gathered during the requirements analysis?",
        options: [
          "Only budget information",
          "Customer needs, budget, and timeline",
          "Just contact details",
          "Previous vendor information only"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "When should you present the solution to the customer?",
        options: [
          "Before gathering requirements",
          "During initial contact",
          "After completing requirements analysis",
          "After contract signing"
        ],
        correctAnswer: 2
      }
    ]
  };

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.questions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score >= 80;

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/quizzes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Quizzes
            </Link>
          </Button>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <CheckCircle className={`w-8 h-8 ${passed ? 'text-green-600' : 'text-red-600'}`} />
            </div>
            <CardTitle className="text-2xl text-[#0D1B2A]">
              Quiz {passed ? 'Completed' : 'Failed'}
            </CardTitle>
            <CardDescription>
              You scored {score}% on {quizData.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: passed ? '#22c55e' : '#ef4444' }}>
                {score}%
              </div>
              <p className="text-gray-600">
                {passed ? 'Congratulations! You passed the quiz.' : 'You need 80% to pass. Try again.'}
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Quiz Summary:</h3>
              <ul className="text-sm space-y-1">
                <li>Questions answered: {Object.keys(answers).length}/{quizData.questions.length}</li>
                <li>Correct answers: {Math.round((score / 100) * quizData.questions.length)}</li>
                <li>Passing score: {quizData.passingScore}</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/quizzes">Back to Quizzes</Link>
              </Button>
              {!passed && (
                <Button 
                  className="flex-1 bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]"
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                >
                  Retake Quiz
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = quizData.questions[currentQuestion];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/quizzes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Quizzes
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-[#0D1B2A]">{quizData.title}</h1>
            <p className="text-gray-600">{quizData.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline">
            <Clock className="w-4 h-4 mr-1" />
            {quizData.timeLimit}
          </Badge>
          <Badge variant="outline">
            Related: {quizData.sopTitle}
          </Badge>
        </div>
      </div>

      {/* Quiz Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#0D1B2A]">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </CardTitle>
            <div className="text-sm text-gray-600">
              Progress: {Math.round(((currentQuestion + 1) / quizData.questions.length) * 100)}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#36CFC9] h-2 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestion + 1) / quizData.questions.length) * 100}%` }}
            ></div>
          </div>
        </CardHeader>
      </Card>

      {/* Question */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-[#0D1B2A]">
            {currentQ.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={answers[currentQ.id]?.toString()}
            onValueChange={(value) => handleAnswerChange(currentQ.id, parseInt(value))}
          >
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </span>
            
            <Button 
              onClick={handleNext}
              disabled={answers[currentQ.id] === undefined}
              className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]"
            >
              {currentQuestion === quizData.questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizDetailsPage;
