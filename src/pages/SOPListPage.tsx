
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Plus, Search, Edit, Trash2, Eye, Filter, Grid, List, Star } from "lucide-react";
import { useSops } from "@/hooks/useSops";
import { useAuth } from "@/hooks/useAuth";

const SOPListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { sops, isLoading, createSOP, deleteSOP, isCreating, isDeleting } = useSops();
  const { user } = useAuth();

  const filteredSops = sops.filter(sop =>
    sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sop.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateSOP = () => {
    if (!user) return;
    createSOP({
      title: "New Standard Operating Procedure",
      description: "This is a new standard operating procedure ready for customization.",
      created_by: user.id
    });
  };

  const handleDeleteSOP = (id: string) => {
    if (window.confirm("Are you sure you want to delete this SOP? This action cannot be undone.")) {
      deleteSOP(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#36CFC9] mx-auto"></div>
          <div className="text-lg font-medium text-gray-600">Loading your SOPs...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-[#0D1B2A] bg-gradient-to-r from-[#0D1B2A] to-[#415A77] bg-clip-text">
            Standard Operating Procedures
          </h1>
          <p className="text-lg text-gray-600">
            Create, manage, and organize your team's SOPs with ease
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {sops.length} SOPs
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {sops.filter(sop => sop.version > 1).length} Updated
            </span>
          </div>
        </div>
        <Button 
          onClick={handleCreateSOP}
          disabled={isCreating}
          className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 h-12 px-8"
        >
          <Plus className="w-5 h-5 mr-2" />
          {isCreating ? "Creating..." : "Create New SOP"}
        </Button>
      </div>

      {/* Search and Controls */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-white to-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search SOPs by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-[#36CFC9] focus:ring-[#36CFC9] text-lg"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="h-12">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <div className="flex items-center border rounded-lg p-1 bg-white">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-[#36CFC9] text-white" : ""}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-[#36CFC9] text-white" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      {filteredSops.length === 0 ? (
        <Card className="border-0 shadow-xl">
          <CardContent className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-[#36CFC9]/20 to-[#FFC857]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-[#36CFC9]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {searchQuery ? "No SOPs match your search" : "No SOPs found"}
            </h3>
            <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
              {searchQuery 
                ? "Try adjusting your search terms or clear the search to see all SOPs."
                : "Get started by creating your first standard operating procedure to streamline your team's workflows."
              }
            </p>
            {!searchQuery && (
              <Button 
                onClick={handleCreateSOP}
                disabled={isCreating}
                className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 h-12 px-8"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Your First SOP
              </Button>
            )}
          </CardContent>
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSops.map((sop) => (
            <Card key={sop.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-[#0D1B2A] mb-2 line-clamp-2">
                      {sop.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {sop.description || "No description provided"}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant="secondary"
                    className="ml-3 bg-gradient-to-r from-[#36CFC9]/20 to-[#FFC857]/20 text-[#0D1B2A] border-0"
                  >
                    v{sop.version}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    Updated {new Date(sop.updated_at || sop.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link to={`/sops/${sop.id}`}>
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link to={`/sops/${sop.id}/edit`}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteSOP(sop.id)}
                    disabled={isDeleting}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
            <CardTitle className="flex items-center text-xl">
              <FileText className="w-6 h-6 mr-3 text-[#36CFC9]" />
              SOPs ({filteredSops.length})
            </CardTitle>
            <CardDescription>
              Manage your standard operating procedures
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="font-semibold">Title</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                  <TableHead className="font-semibold">Version</TableHead>
                  <TableHead className="font-semibold">Last Updated</TableHead>
                  <TableHead className="text-right font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSops.map((sop) => (
                  <TableRow key={sop.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-medium text-[#0D1B2A]">{sop.title}</TableCell>
                    <TableCell className="max-w-xs truncate text-gray-600">
                      {sop.description || "No description"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-gradient-to-r from-[#36CFC9]/20 to-[#FFC857]/20 text-[#0D1B2A] border-0">
                        v{sop.version}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-500">
                      {new Date(sop.updated_at || sop.created_at).toLocaleDateString()}
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
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SOPListPage;
