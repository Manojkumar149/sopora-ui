
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, Search, Filter, Download, Trash2, Eye } from "lucide-react";

const MediaPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mediaFiles = [
    {
      id: "1",
      name: "onboarding-flowchart.png",
      type: "Image",
      size: "2.4 MB",
      uploadedBy: "John Doe",
      uploadDate: "2024-01-15",
      attachedTo: "Customer Onboarding Process",
      url: "/placeholder.svg"
    },
    {
      id: "2", 
      name: "safety-training-video.mp4",
      type: "Video",
      size: "45.2 MB",
      uploadedBy: "Sarah Johnson",
      uploadDate: "2024-01-14",
      attachedTo: "Safety Training Protocol",
      url: "/placeholder.svg"
    },
    {
      id: "3",
      name: "quality-checklist.pdf",
      type: "Document",
      size: "1.8 MB", 
      uploadedBy: "Mike Chen",
      uploadDate: "2024-01-13",
      attachedTo: "Quality Control Checklist",
      url: "/placeholder.svg"
    },
    {
      id: "4",
      name: "process-diagram.png",
      type: "Image",
      size: "3.1 MB",
      uploadedBy: "Jane Smith",
      uploadDate: "2024-01-12",
      attachedTo: null,
      url: "/placeholder.svg"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Image":
        return "bg-blue-100 text-blue-800";
      case "Video":
        return "bg-purple-100 text-purple-800";
      case "Document":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Media Management</h1>
          <p className="text-gray-600">Upload and manage media files for your SOPs</p>
        </div>
        <Button className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
          <Upload className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Upload Zone */}
      <Card>
        <CardContent className="pt-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#36CFC9] transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#0D1B2A] mb-2">
              Drag and drop files here
            </h3>
            <p className="text-gray-600 mb-4">
              Or click to browse and upload files
            </p>
            <Button variant="outline">
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[#0D1B2A]">Media Library</CardTitle>
              <CardDescription>Browse and manage your uploaded files</CardDescription>
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
                placeholder="Search media files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mediaFiles.map((file) => (
              <Card key={file.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <img 
                      src={file.url} 
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className={getTypeColor(file.type)}>
                        {file.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{file.size}</span>
                    </div>
                    
                    <h3 className="font-medium text-[#0D1B2A] truncate" title={file.name}>
                      {file.name}
                    </h3>
                    
                    <div className="text-xs text-gray-600">
                      <p>By {file.uploadedBy}</p>
                      <p>{file.uploadDate}</p>
                    </div>
                    
                    {file.attachedTo && (
                      <Badge variant="outline" className="text-xs">
                        {file.attachedTo}
                      </Badge>
                    )}
                    
                    {/* Actions */}
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaPage;
