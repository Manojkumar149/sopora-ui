
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
import { Plus, Search, Filter, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AssignmentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const assignments = [
    {
      id: "1",
      sopTitle: "Customer Onboarding Process",
      assignedTo: "Sales Team",
      assignedUsers: 8,
      completed: 6,
      progress: "75%",
      dueDate: "2024-02-15",
      status: "In Progress"
    },
    {
      id: "2",
      sopTitle: "Safety Training Protocol",
      assignedTo: "All Staff",
      assignedUsers: 24,
      completed: 20,
      progress: "83%",
      dueDate: "2024-02-10",
      status: "In Progress"
    },
    {
      id: "3",
      sopTitle: "Quality Control Checklist",
      assignedTo: "Operations Team",
      assignedUsers: 6,
      completed: 6,
      progress: "100%",
      dueDate: "2024-01-30",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Training Assignments</h1>
          <p className="text-gray-600">Manage and track training assignments</p>
        </div>
        <Button className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
          <Plus className="w-4 h-4 mr-2" />
          New Assignment
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0D1B2A]">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Average Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#36CFC9]">86%</div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#0D1B2A]">Assignment Overview</CardTitle>
              <CardDescription>Track progress of all training assignments</CardDescription>
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
                placeholder="Search assignments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SOP Title</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">
                    {assignment.sopTitle}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{assignment.assignedTo}</div>
                      <div className="text-sm text-gray-500">
                        {assignment.completed}/{assignment.assignedUsers} completed
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#36CFC9] h-2 rounded-full" 
                          style={{ width: assignment.progress }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{assignment.progress}</span>
                    </div>
                  </TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(assignment.status)}>
                      {assignment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
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

export default AssignmentsPage;
