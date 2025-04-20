
import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building, FileText, MapPin } from "lucide-react";

const ProjectForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Project Registration Form</h1>
          <p className="mt-2 text-gray-600">Iscon Balaji Foods Private Limited</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Building className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-medium text-gray-800">Company Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  defaultValue="Iscon Balaji Foods Private Limited"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstNo">GST No</Label>
                <Input id="gstNo" placeholder="Enter GST number" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cinNo">CIN No</Label>
                <Input
                  id="cinNo"
                  defaultValue="U15400GJ2012PTC068764"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sector">Sector</Label>
                <Input
                  id="sector"
                  defaultValue="Agro-Food Processing"
                  className="bg-white"
                />
              </div>
            </div>
          </Card>

          {/* Project Details */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-medium text-gray-800">Project Details</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  id="projectName"
                  defaultValue="Dehydrated Potato Flakes Manufacturing Unit"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Input
                  id="projectDescription"
                  defaultValue="Establishment of a manufacturing facility for Dehydrated Potato Flakes at Vikram Udyogpuri Township, Near Narwar, Ujjain, Madhya Pradesh."
                  className="bg-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="machineryCost">Plant & Machinery Cost</Label>
                  <Input
                    id="machineryCost"
                    defaultValue="4,500.00 Lacs"
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="totalInvestment">Total Investment</Label>
                  <Input
                    id="totalInvestment"
                    defaultValue="9,274.00 Lacs"
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employment">Employment</Label>
                  <Input
                    id="employment"
                    defaultValue="383 employees"
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lineOfActivity">Line of Activity</Label>
                  <Input
                    id="lineOfActivity"
                    defaultValue="Manufacturing of Dehydrated Potato Flakes"
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Location Details */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-medium text-gray-800">Location Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Input id="district" defaultValue="Ujjain" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address/Industrial Area</Label>
                <Input
                  id="address"
                  defaultValue="Vikram Udyogpuri Township, Near Narwar"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village/City</Label>
                <Input id="village" defaultValue="Narwar" className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landType">Type of Land</Label>
                <Input id="landType" defaultValue="Industrial" className="bg-white" />
              </div>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
