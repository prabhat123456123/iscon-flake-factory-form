import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Building, FileText, MapPin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ProjectForm = () => {
  const { setTheme, theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Intention to Invest</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Basic Details */}
          <Card className="p-6 transition-colors duration-200 dark:bg-gray-800/50 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-medium text-gray-800">Project Basic Details</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectTitle">Proposed Project Title <span className="text-red-500">*</span></Label>
                <Input
                  id="projectTitle"
                  placeholder="Enter Project Title"
                  defaultValue="Dehydrated Potato Flakes Manufacturing Unit"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectDescription">Brief Project Overview <span className="text-red-500">*</span></Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Enter Project Description"
                  defaultValue="Establishment of a manufacturing facility for Dehydrated Potato Flakes at Vikram Udyogpuri Township, Near Narwar, Ujjain, Madhya Pradesh."
                  className="bg-white min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Business Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="trading">Trading</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industrySector">Industry Sector <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Industry Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agro">Agro-Food Processing</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subSector">Sub Sector <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Sub Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food Processing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          {/* Company Information */}
          <Card className="p-6 transition-colors duration-200 dark:bg-gray-800/50 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <Building className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-medium text-gray-800">Company Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Organization Name <span className="text-red-500">*</span></Label>
                <Input
                  id="companyName"
                  defaultValue="Iscon Balaji Foods Private Limited"
                  className="bg-white"
                />
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
                <Label htmlFor="gstNo">GST No</Label>
                <Input id="gstNo" placeholder="Enter GST number" className="bg-white" />
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

          {/* Project Requirements */}
          <Card className="p-6 transition-colors duration-200 dark:bg-gray-800/50 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-medium text-gray-800">Project Requirements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="totalInvestment">Total Investment (₹)</Label>
                <Input
                  id="totalInvestment"
                  defaultValue="9,274.00 Lacs"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="machineryCost">Plant & Machinery Cost (₹)</Label>
                <Input
                  id="machineryCost"
                  defaultValue="4,500.00 Lacs"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="powerRequired">Power Required (MW)</Label>
                <Input
                  id="powerRequired"
                  placeholder="Enter power requirement"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waterRequired">Water Required (KL)</Label>
                <Input
                  id="waterRequired"
                  placeholder="Enter water requirement"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employment">Employment Generation</Label>
                <Input
                  id="employment"
                  defaultValue="383 employees"
                  className="bg-white"
                />
              </div>
            </div>
          </Card>

          {/* Location Details */}
          <Card className="p-6 transition-colors duration-200 dark:bg-gray-800/50 dark:border-gray-700">
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

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" className="dark:border-gray-700 dark:hover:bg-gray-700">
              Cancel
            </Button>
            <Button type="submit" className="dark:bg-blue-600 dark:hover:bg-blue-700">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
