
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import { useSops } from "@/hooks/useSops";

const SOPListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { sops, isLoading, createSOP, deleteSOP, isCreating, isDeleting } = useSops();

  const filteredSops = sops.filter(sop =>
    sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sop.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateSOP = () => {
    createSOP({
      title: "New SOP",
      description: "This is a new standard operating procedure."
    });
  };

  const handleDeleteSOP = (id: string) => {
    if (window.confirm("Are you sure you want to delete this SOP?")) {
      deleteSOP(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading SOPs...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Standard Operating Procedures</h1>
          <p className="text-gray-600">Manage and organize your team's SOPs</p>
        </div>
        <Button 
          onClick={handleCreateSOP}
          disabled={isCreating}
          className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]"
        >
          <Plus className="w-4 h-4 mr-2" />
          {isCreating ? "Creating..." : "Create SOP"}
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search SOPs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SOPs Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            SOPs ({filteredSops.length})
          </CardTitle>
          <CardDescription>
            Manage your standard operating procedures
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredSops.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No SOPs found</h3>
              <p className="text-gray-500 mb-4">
                {searchQuery ? "No SOPs match your search criteria." : "Get started by creating your first SOP."}
              </p>
              {!searchQuery && (
                <Button 
                  onClick={handleCreateSOP}
                  disabled={isCreating}
                  className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First SOP
                </Button>
              )}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSops.map((sop) => (
                  <TableRow key={sop.id}>
                    <TableCell className="font-medium">{sop.title}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {sop.description || "No description"}
                    </TableCell>
                    <TableCell>v{sop.version}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={sop.is_published ? "default" : "secondary"}
                        className={sop.is_published ? "bg-green-100 text-green-800" : ""}
                      >
                        {sop.is_published ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(sop.updated_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/sops/${sop.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/sops/${sop.id}/edit`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteSOP(sop.id)}
                          disabled={isDeleting}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SOPListPage;
