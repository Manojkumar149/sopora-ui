
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Filter, Eye, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const QuizzesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const quizzes = [
    {
      id: "1",
      title: "Customer Onboarding Knowledge Check",
      sopTitle: "Customer Onboarding Process",
      questions: 10,
      attempts: 24,
      averageScore: "87%",
      status: "Active"
    },
    {
      id: "2", 
      title: "Safety Protocol Assessment",
      sopTitle: "Safety Training Protocol",
      questions: 15,
      attempts: 18,
      averageScore: "92%",
      status: "Active"
    },
    {
      id: "3",
      title: "Quality Standards Quiz",
      sopTitle: "Quality Control Checklist", 
      questions: 8,
      attempts: 12,
      averageScore: "95%",
      status: "Draft"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Quiz Management</h1>
          <p className="text-gray-600">Create and manage knowledge assessments</p>
        </div>
        <Button className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
          <Plus className="w-4 h-4 mr-2" />
          Create Quiz
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0D1B2A]">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Attempts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">54</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">91%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#36CFC9]">2</div>
          </CardContent>
        </Card>
      </div>

      {/* Quizzes Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#0D1B2A]">All Quizzes</CardTitle>
              <CardDescription>Manage your knowledge assessments</CardDescription>
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quiz Title</TableHead>
                <TableHead>Related SOP</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Attempts</TableHead>
                <TableHead>Avg Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">
                    <Link 
                      to={`/quizzes/${quiz.id}`}
                      className="text-[#0D1B2A] hover:text-[#36CFC9] transition-colors"
                    >
                      {quiz.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{quiz.sopTitle}</Badge>
                  </TableCell>
                  <TableCell>{quiz.questions}</TableCell>
                  <TableCell>{quiz.attempts}</TableCell>
                  <TableCell>
                    <span className="font-medium">{quiz.averageScore}</span>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(quiz.status)}>
                      {quiz.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={`/quizzes/${quiz.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizzesPage;
