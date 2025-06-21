
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
import { Plus, Search, Filter, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const SOPListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sops = [
    {
      id: "1",
      title: "Customer Onboarding Process",
      category: "Sales",
      status: "Published",
      lastUpdated: "2024-01-15",
      assignedUsers: 12,
      completionRate: "85%"
    },
    {
      id: "2",
      title: "Quality Control Checklist",
      category: "Operations",
      status: "Draft",
      lastUpdated: "2024-01-14",
      assignedUsers: 8,
      completionRate: "92%"
    },
    {
      id: "3",
      title: "Safety Training Protocol",
      category: "Safety",
      status: "Published",
      lastUpdated: "2024-01-13",
      assignedUsers: 24,
      completionRate: "78%"
    },
    {
      id: "4",
      title: "Emergency Response Procedures",
      category: "Safety",
      status: "Published",
      lastUpdated: "2024-01-12",
      assignedUsers: 35,
      completionRate: "96%"
    }
  ];

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
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Standard Operating Procedures</h1>
          <p className="text-gray-600">Manage and organize your SOPs</p>
        </div>
        <Button asChild className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
          <Link to="/sops/new/edit">
            <Plus className="w-4 h-4 mr-2" />
            Create New SOP
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#0D1B2A]">SOPs Overview</CardTitle>
              <CardDescription>Browse and manage your organization's procedures</CardDescription>
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
                placeholder="Search SOPs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Users</TableHead>
                <TableHead>Completion Rate</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sops.map((sop) => (
                <TableRow key={sop.id}>
                  <TableCell className="font-medium">
                    <Link 
                      to={`/sops/${sop.id}`}
                      className="text-[#0D1B2A] hover:text-[#36CFC9] transition-colors"
                    >
                      {sop.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{sop.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(sop.status)}>
                      {sop.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{sop.assignedUsers}</TableCell>
                  <TableCell>{sop.completionRate}</TableCell>
                  <TableCell>{sop.lastUpdated}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={`/sops/${sop.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={`/sops/${sop.id}/edit`}>
                          <Edit className="w-4 h-4" />
                        </Link>
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

export default SOPListPage;
