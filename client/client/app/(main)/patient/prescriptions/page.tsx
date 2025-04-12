'use client';

import React, { useState } from 'react';
import { Pill, FileText, AlertCircle, Clock, RefreshCcw, Search, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from 'framer-motion';

// Sample prescriptions data
const prescriptions = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedDate: "March 10, 2025",
    expiryDate: "September 10, 2025",
    refills: 2,
    doctor: "Dr. Emily Johnson",
    pharmacy: "MediCare Pharmacy",
    status: "Active"
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedDate: "March 18, 2025",
    expiryDate: "September 18, 2025",
    refills: 5,
    doctor: "Dr. Michael Chen",
    pharmacy: "Health Plus Pharmacy",
    status: "Active"
  },
  {
    id: 3,
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily at bedtime",
    prescribedDate: "March 25, 2025",
    expiryDate: "September 25, 2025",
    refills: 3,
    doctor: "Dr. Sarah Williams",
    pharmacy: "MediCare Pharmacy",
    status: "Active"
  },
  {
    id: 4,
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "Three times daily",
    prescribedDate: "February 15, 2025",
    expiryDate: "February 22, 2025",
    refills: 0,
    doctor: "Dr. Robert Davis",
    pharmacy: "Central Pharmacy",
    status: "Expired"
  }
];

const statusColors = {
  Active: "bg-green-600/20 text-green-400",
  Expired: "bg-red-600/20 text-red-400",
  Pending: "bg-amber-600/20 text-amber-400"
};

const Prescriptions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPrescriptions = searchQuery 
    ? prescriptions.filter(prescription => 
        prescription.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        prescription.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prescription.pharmacy.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : prescriptions;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-br from-purple-900/40 to-black">
      <div className="max-w-4xl mx-auto pb-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl shadow-lg mb-6 p-6 border border-purple-300/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold gradient-text">Prescriptions</h1>
              <p className="text-sm text-purple-200/80">Manage your medications and refills</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-600/20">
                <FileText className="h-4 w-4 mr-2" />
                View History
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-md shadow-purple-700/30">
                <RefreshCcw className="h-4 w-4 mr-2" />
                Request Refill
              </Button>
            </div>
          </div>
          
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search medications, doctors, or pharmacies..."
              className="w-full h-12 pl-12 pr-4 bg-card/60 border border-purple-400/30 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 h-4 w-4 text-purple-400" />
          </div>
          
          <motion.div 
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredPrescriptions.length > 0 ? (
              filteredPrescriptions.map((prescription) => (
                <motion.div 
                  key={prescription.id} 
                  className="border border-purple-300/20 rounded-xl p-5 hover:border-purple-400/40 transition-all hover:shadow-lg hover:shadow-purple-700/10 bg-purple-600/5"
                  variants={item}
                  whileHover={{ scale: 1.01, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                        <Pill className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg text-white">{prescription.name}</h2>
                        <p className="text-purple-200/80">{prescription.dosage}, {prescription.frequency}</p>
                      </div>
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[prescription.status as keyof typeof statusColors]}`}>
                        {prescription.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-purple-300/60">Prescribed By</p>
                      <p className="font-medium text-purple-200">{prescription.doctor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-300/60">Pharmacy</p>
                      <p className="font-medium text-purple-200">{prescription.pharmacy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-300/60">Refills Remaining</p>
                      <p className="font-medium text-purple-200">{prescription.refills}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-purple-300/10">
                    <div className="flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center text-sm text-purple-300/80 mr-4">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Expires: {prescription.expiryDate}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Prescribed on {prescription.prescribedDate}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      {prescription.status === "Expired" && (
                        <div className="flex items-center text-sm text-red-400">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>Expired</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50"
                      >
                        <FileText className="h-3 w-3 mr-2" />
                        Details
                      </Button>
                      {prescription.status === "Active" && prescription.refills > 0 && (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-xs"
                        >
                          <RefreshCcw className="h-3 w-3 mr-2" />
                          Refill
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10 bg-purple-600/5 rounded-xl border border-purple-300/10">
                <AlertCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-200">No prescriptions match your search.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl shadow-lg p-6 border border-purple-300/20"
        >
          <h2 className="text-lg font-semibold mb-6 text-purple-100">Common Medications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Blood Pressure Medications", 
                desc: "ACE inhibitors, Beta blockers, Calcium channel blockers",
                icon: "heart"
              },
              {
                name: "Cholesterol Medications", 
                desc: "Statins, PCSK9 inhibitors, Bile acid sequestrants",
                icon: "droplet"
              },
              {
                name: "Diabetes Medications", 
                desc: "Insulin, Metformin, GLP-1 receptor agonists",
                icon: "activity"
              },
            ].map((medication, index) => (
              <motion.div 
                key={index} 
                className="border border-purple-300/20 rounded-xl p-5 hover:border-purple-400/40 cursor-pointer transition-all hover:shadow-lg hover:shadow-purple-700/10 bg-purple-600/5"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center mb-3">
                  <Pill className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="font-medium text-purple-100 mb-1">{medication.name}</h3>
                <p className="text-sm text-purple-200/70 mb-3">{medication.desc}</p>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="text-purple-300 hover:text-purple-200 p-0"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prescriptions;