
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Save, Eye, ArrowLeft, Plus, Trash2 } from "lucide-react";

const SOPEditorPage = () => {
  const { sopId } = useParams();
  const isNew = sopId === "new";
  
  const [title, setTitle] = useState(isNew ? "" : "Customer Onboarding Process");
  const [description, setDescription] = useState(isNew ? "" : "Complete guide for onboarding new customers");
  const [category, setCategory] = useState(isNew ? "" : "Sales");
  const [steps, setSteps] = useState(isNew ? [] : [
    { id: 1, title: "Initial Contact", content: "Make initial contact with the customer and gather basic information." },
    { id: 2, title: "Requirements Analysis", content: "Analyze customer requirements and document specific needs." },
    { id: 3, title: "Solution Presentation", content: "Present tailored solution based on customer requirements." }
  ]);

  const addStep = () => {
    const newStep = {
      id: Date.now(),
      title: "",
      content: ""
    };
    setSteps([...steps, newStep]);
  };

  const removeStep = (id: number) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const updateStep = (id: number, field: string, value: string) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, [field]: value } : step
    ));
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
            <h1 className="text-3xl font-bold text-[#0D1B2A]">
              {isNew ? "Create New SOP" : "Edit SOP"}
            </h1>
            <p className="text-gray-600">
              {isNew ? "Create a new standard operating procedure" : "Modify an existing procedure"}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
            <Save className="w-4 h-4 mr-2" />
            Save SOP
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Basic Information</CardTitle>
              <CardDescription>Essential details about your SOP</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter SOP title"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the procedure"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Sales, Operations, Safety"
                />
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-[#0D1B2A]">Procedure Steps</CardTitle>
                  <CardDescription>Define the step-by-step process</CardDescription>
                </div>
                <Button onClick={addStep} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Step
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Step {index + 1}</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeStep(step.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div>
                      <Label>Step Title</Label>
                      <Input
                        value={step.title}
                        onChange={(e) => updateStep(step.id, "title", e.target.value)}
                        placeholder="Enter step title"
                      />
                    </div>
                    <div>
                      <Label>Step Content</Label>
                      <Textarea
                        value={step.content}
                        onChange={(e) => updateStep(step.id, "content", e.target.value)}
                        placeholder="Describe what needs to be done in this step"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
                {steps.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No steps added yet. Click "Add Step" to get started.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publishing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Publishing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
              </div>
              <Button className="w-full bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
                Publish SOP
              </Button>
            </CardContent>
          </Card>

          {/* Media */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Media</CardTitle>
              <CardDescription>Attach images, videos, or documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/media">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Media
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Assignment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Assignment</CardTitle>
              <CardDescription>Who should follow this SOP?</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/assignments">
                  Assign to Users
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SOPEditorPage;
