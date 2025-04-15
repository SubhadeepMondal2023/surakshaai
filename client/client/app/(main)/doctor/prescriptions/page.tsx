'use client';

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Pill,
  Book,
  Brain,
  Bot,
  CircleCheck,
  X,
  Copy,
  Printer,
  Sparkles,
  Loader2
} from "lucide-react";

interface Patient {
  id: string;
  name: string;
  age: number;
  allergies: string[];
  conditions: string[];
}

interface PrescriptionPreview {
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
  warnings?: string;
}

const PrescriptionMaker = () => {
  const { toast } = useToast();
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [medication, setMedication] = useState<string>("");
  const [dosage, setDosage] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [plainTextInput, setPlainTextInput] = useState<string>("");
  const [isAiProcessing, setIsAiProcessing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [previewFormat, setPreviewFormat] = useState<"professional" | "patient">("professional");
  const [patients, setPatients] = useState<Patient[]>([]);
  
  // Fetch patients on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch('/api/patients');
        const data = await res.json();
        setPatients(data);
      } catch (error) {
        toast({
          title: "Failed to load patients",
          variant: "destructive"
        });
      }
    };
    
    fetchPatients();
  }, [toast]);

  const patient = patients.find(p => p.id === selectedPatient);
  
  const handleAiGenerate = async () => {
    if (!plainTextInput.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a plain text description of the prescription",
        variant: "destructive"
      });
      return;
    }
    
    if (!patient) {
      toast({
        title: "Patient Required",
        description: "Please select a patient first",
        variant: "destructive"
      });
      return;
    }
    
    setIsAiProcessing(true);
    
    try {
      const response = await fetch('/api/prescriptions/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: plainTextInput,
          patientInfo: {
            name: patient.name,
            age: patient.age,
            conditions: patient.conditions,
            allergies: patient.allergies
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(await response.text());
      }
      
      const data: PrescriptionPreview = await response.json();
      
      setMedication(data.medication);
      setDosage(data.dosage);
      setFrequency(data.frequency);
      setDuration(data.duration);
      setInstructions(
        `${data.instructions}${data.warnings ? `\n\nWarnings: ${data.warnings}` : ''}`
      );
      
      toast({
        title: "Prescription Generated",
        description: "AI has created a prescription based on your description",
      });
    } catch (error) {
      console.error('AI generation error:', error);
      toast({
        title: "Generation Failed",
        description: "Could not generate prescription",
        variant: "destructive"
      });
    } finally {
      setIsAiProcessing(false);
    }
  };
  
// In your page.tsx
const handleSavePrescription = async () => {
    if (!selectedPatient || !medication) {
      toast({ title: "Missing information", variant: "destructive" });
      return;
    }
  
    setIsSaving(true);
    
    try {
      await fetch('/api/prescriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: selectedPatient,
          doctorId: "current-doctor-id", // Get from auth/session
          medication,
          dosage,
          frequency,
          duration,
          instructions,
          pharmacy: "Main Pharmacy", // Optional: get from form input
          refills: 1 // Optional: get from form input
        })
      });
      
      toast({ title: "Prescription saved successfully" });
      
      // Reset form
      setMedication("");
      setDosage("");
      setFrequency("");
      setDuration("");
      setInstructions("");
    } catch (error) {
      toast({ title: "Save failed", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };
  const dosageOptions = ["5mg", "10mg", "20mg", "25mg", "50mg", "100mg", "Custom..."];
  const frequencyOptions = [
    "Once daily",
    "Twice daily (BID)",
    "Three times daily (TID)",
    "Four times daily (QID)",
    "As needed (PRN)"
  ];
  
  const renderPreview = () => {
    if (!medication) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <Book className="h-16 w-16 mb-4 opacity-30" />
          <p>Enter prescription details to see preview</p>
        </div>
      );
    }
    
    if (previewFormat === "professional") {
      return (
        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="font-bold">PRESCRIPTION</h3>
            <div className="text-right">
              <p>Date: {new Date().toLocaleDateString()}</p>
              <p>Rx #: {Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}</p>
            </div>
          </div>
          
          <div className="border-b border-white/10 pb-4">
            <p><span className="font-semibold">Patient:</span> {patient?.name || "N/A"} ({patient?.age || "--"} y/o)</p>
            <p><span className="font-semibold">Patient ID:</span> {patient?.id || "N/A"}</p>
            <p><span className="font-semibold">Allergies:</span> {patient?.allergies?.length ? patient.allergies.join(", ") : "None reported"}</p>
          </div>
          
          <div className="space-y-2 pb-4 border-b border-white/10">
            <div className="flex items-center">
              <Pill className="mr-2 h-5 w-5 text-primary" />
              <span className="font-semibold text-lg">{medication}</span>
            </div>
            <p><span className="font-semibold">Dosage:</span> {dosage}</p>
            <p><span className="font-semibold">Sig:</span> {frequency}</p>
            <p><span className="font-semibold">Duration:</span> {duration}</p>
            <p><span className="font-semibold">Instructions:</span> {instructions}</p>
          </div>
          
          <div className="pt-4">
            <p><span className="font-semibold">Prescriber:</span> Dr. Jane Smith, MD</p>
            <p><span className="font-semibold">License #:</span> MD123456</p>
            <p><span className="font-semibold">Signature:</span> <span className="italic">Jane Smith, MD</span></p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          <h3 className="font-bold text-xl text-center mb-6">Your Medication Guide</h3>
          
          <div className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Medication</h4>
              <p className="text-lg">{medication} {dosage}</p>
              <p className="text-gray-400">Take {frequency.toLowerCase()}</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">How to take this medication</h4>
              <p>{instructions}</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">How long to take it</h4>
              <p>{duration}</p>
            </div>
            
            <div className="bg-yellow-500/10 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-400 mb-2">Important Notes</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Take this medication as prescribed</li>
                <li>Do not stop taking without consulting your doctor</li>
                <li>Keep out of reach of children</li>
                {patient?.allergies?.length ? (
                  <li className="text-red-400">You have allergies to: {patient.allergies.join(", ")}</li>
                ) : null}
              </ul>
            </div>
            
            <div className="text-sm text-gray-400 mt-8">
              <p>If you have any questions about your medication, please contact the clinic.</p>
              <p>Prescribed by Dr. Jane Smith on {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Pill className="mr-2 h-5 w-5" />
            New Prescription
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="patient-select">Patient</Label>
              <Select 
                value={selectedPatient} 
                onValueChange={setSelectedPatient}
                disabled={isAiProcessing || isSaving}
              >
                <SelectTrigger id="patient-select" className="w-full">
                  <SelectValue placeholder="Select a patient" />
                </SelectTrigger>
                <SelectContent>
                  {patients.map(patient => (
                    <SelectItem key={patient.id} value={patient.id}>
                      {patient.name} ({patient.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {patient && (
                <div className="mt-2 animate-fade-in">
                  <div className="flex flex-wrap gap-2 mt-1">
                    {patient.allergies?.map(allergy => (
                      <Badge key={allergy} variant="outline" className="bg-red-500/20 text-red-300 border-red-500/30">
                        <X className="mr-1 h-3 w-3" /> {allergy}
                      </Badge>
                    ))}
                    {patient.conditions?.map(condition => (
                      <Badge key={condition} variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        <Brain className="mr-1 h-3 w-3" /> {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <Label htmlFor="medication">Medication</Label>
              <Input 
                id="medication" 
                value={medication} 
                onChange={(e) => setMedication(e.target.value)}
                placeholder="Enter medication name"
                disabled={isAiProcessing || isSaving}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dosage">Dosage</Label>
                <Select 
                  value={dosage} 
                  onValueChange={setDosage}
                  disabled={isAiProcessing || isSaving}
                >
                  <SelectTrigger id="dosage" className="w-full">
                    <SelectValue placeholder="Select dosage" />
                  </SelectTrigger>
                  <SelectContent>
                    {dosageOptions.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select 
                  value={frequency} 
                  onValueChange={setFrequency}
                  disabled={isAiProcessing || isSaving}
                >
                  <SelectTrigger id="frequency" className="w-full">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {frequencyOptions.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Input 
                id="duration" 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 30 days (with 2 refills)"
                disabled={isAiProcessing || isSaving}
              />
            </div>
            
            <div>
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea 
                id="instructions" 
                value={instructions} 
                onChange={(e) => setInstructions(e.target.value)}
                className="min-h-24"
                placeholder="Enter detailed instructions for patient"
                disabled={isAiProcessing || isSaving}
              />
            </div>
            
            <div className="flex gap-2 justify-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setMedication("");
                  setDosage("");
                  setFrequency("");
                  setDuration("");
                  setInstructions("");
                }}
                disabled={isAiProcessing || isSaving}
              >
                <X className="mr-2 h-4 w-4" />
                Clear
              </Button>
              <Button 
                onClick={handleSavePrescription}
                disabled={!selectedPatient || !medication || isAiProcessing || isSaving}
              >
                {isSaving ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <CircleCheck className="mr-2 h-4 w-4" />
                )}
                Save Prescription
              </Button>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Bot className="mr-2 h-5 w-5" />
            AI Prescription Assistant
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="plain-text">Describe in plain text</Label>
              <Textarea 
                id="plain-text" 
                value={plainTextInput} 
                onChange={(e) => setPlainTextInput(e.target.value)}
                className="min-h-32"
                placeholder="e.g., Need statin for cholesterol, start low dose"
                disabled={isAiProcessing || isSaving}
              />
            </div>
            
            <Button 
              onClick={handleAiGenerate} 
              disabled={isAiProcessing || !plainTextInput.trim() || isSaving}
              className="w-full"
            >
              {isAiProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Prescription
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
      
      <div>
        <Card className="p-6 h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium flex items-center">
              <Book className="mr-2 h-5 w-5" />
              Prescription Preview
            </h3>
            
            <div className="flex items-center space-x-2">
              <Tabs 
                value={previewFormat} 
                onValueChange={(value) => setPreviewFormat(value as "professional" | "patient")}
                className="w-[400px]"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="professional">Professional</TabsTrigger>
                  <TabsTrigger value="patient">Patient-Friendly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg border min-h-[500px]">
            {renderPreview()}
          </div>
          
          <div className="flex justify-end mt-4 space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigator.clipboard.writeText(
                `Medication: ${medication}\nDosage: ${dosage}\nFrequency: ${frequency}\nDuration: ${duration}\nInstructions: ${instructions}`
              )}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrescriptionMaker;