
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Users, Calendar, CheckCircle } from "lucide-react";

const SOPDetailsPage = () => {
  const { sopId } = useParams();

  const sopData = {
    title: "Customer Onboarding Process",
    description: "Complete guide for onboarding new customers efficiently and effectively",
    category: "Sales",
    status: "Published",
    lastUpdated: "2024-01-15",
    assignedUsers: 12,
    completionRate: "85%",
    createdBy: "John Doe",
    steps: [
      {
        id: 1,
        title: "Initial Contact",
        content: "Make initial contact with the customer and gather basic information including company details, contact information, and primary needs."
      },
      {
        id: 2,
        title: "Requirements Analysis",
        content: "Conduct a thorough analysis of customer requirements. Document specific needs, budget constraints, and timeline expectations."
      },
      {
        id: 3,
        title: "Solution Presentation",
        content: "Present a tailored solution based on the customer requirements analysis. Include pricing, implementation timeline, and expected outcomes."
      },
      {
        id: 4,
        title: "Contract Negotiation",
        content: "Work with the customer to finalize contract terms, pricing, and service level agreements."
      },
      {
        id: 5,
        title: "Onboarding Completion",
        content: "Complete the onboarding process by setting up customer accounts, providing initial training, and scheduling follow-up meetings."
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/sops">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to SOPs
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-[#0D1B2A]">{sopData.title}</h1>
            <p className="text-gray-600">{sopData.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" asChild>
            <Link to="/assignments">
              <Users className="w-4 h-4 mr-2" />
              Assign
            </Link>
          </Button>
          <Button asChild className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
            <Link to={`/sops/${sopId}/edit`}>
              <Edit className="w-4 h-4 mr-2" />
              Edit SOP
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* SOP Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Procedure Steps</CardTitle>
              <CardDescription>Follow these steps to complete the process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {sopData.steps.map((step, index) => (
                  <div key={step.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-[#36CFC9] rounded-full flex items-center justify-center text-[#0D1B2A] font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#0D1B2A] mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SOP Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">SOP Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge className={getStatusColor(sopData.status)}>
                  {sopData.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Category</span>
                <Badge variant="outline">{sopData.category}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Created by</span>
                <span className="text-sm">{sopData.createdBy}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last updated</span>
                <span className="text-sm">{sopData.lastUpdated}</span>
              </div>
            </CardContent>
          </Card>

          {/* Assignment Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Assignment Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Assigned Users</span>
                <span className="text-sm font-bold">{sopData.assignedUsers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Completion Rate</span>
                <span className="text-sm font-bold text-green-600">{sopData.completionRate}</span>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/assignments">
                  View Details
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <Link to={`/quizzes`}>
                  Create Quiz
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Complete
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SOPDetailsPage;
