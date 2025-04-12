'use client';

import React, { useState } from 'react';
import { FileText, Download, Calendar, Plus, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Sample lab test data
const labTests = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    date: "March 15, 2025",
    status: "Completed",
    doctor: "Dr. Emily Johnson"
  },
  {
    id: 2,
    name: "Lipid Panel",
    date: "February 28, 2025",
    status: "Completed",
    doctor: "Dr. Michael Chen"
  },
  {
    id: 3,
    name: "Thyroid Function",
    date: "January 20, 2025",
    status: "Completed",
    doctor: "Dr. Emily Johnson"
  },
  {
    id: 4,
    name: "Vitamin D Level",
    date: "April 18, 2025",
    status: "Scheduled",
    doctor: "Dr. Sarah Williams"
  }
];

const statusColors = {
  Completed: "bg-green-600/20 text-green-400",
  Scheduled: "bg-purple-600/20 text-purple-300",
  Pending: "bg-amber-600/20 text-amber-300"
};

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTests = searchQuery 
    ? labTests.filter(test => 
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        test.doctor.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : labTests;

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
              <h1 className="text-2xl font-bold gradient-text">Lab Tests</h1>
              <p className="text-sm text-purple-200/80">View and manage your medical test results</p>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-md shadow-purple-700/30">
              <Plus className="h-4 w-4 mr-2" />
              Request New Test
            </Button>
          </div>
          
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search tests or doctors..."
              className="w-full h-12 pl-12 pr-4 bg-card/60 border border-purple-400/30 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 h-4 w-4 text-purple-400" />
          </div>
          
          <div className="overflow-x-auto">
            {filteredTests.length > 0 ? (
              <motion.table 
                className="w-full" 
                variants={container}
                initial="hidden"
                animate="show"
              >
                <thead>
                  <tr className="border-b border-purple-300/10">
                    <th className="py-3 px-4 text-left font-medium text-purple-300">Test Name</th>
                    <th className="py-3 px-4 text-left font-medium text-purple-300">Date</th>
                    <th className="py-3 px-4 text-left font-medium text-purple-300">Status</th>
                    <th className="py-3 px-4 text-left font-medium text-purple-300">Ordered By</th>
                    <th className="py-3 px-4 text-right font-medium text-purple-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTests.map((test) => (
                    <motion.tr 
                      key={test.id} 
                      className="border-b border-purple-300/10 last:border-0 hover:bg-purple-600/10 transition-colors"
                      variants={item}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                            <FileText className="h-4 w-4 text-purple-300" />
                          </div>
                          <span className="font-medium text-white">{test.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-purple-200">
                          <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                          {test.date}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[test.status as keyof typeof statusColors]}`}>
                          {test.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-purple-200">{test.doctor}</td>
                      <td className="py-4 px-4 text-right">
                        {test.status === "Completed" ? (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50"
                          >
                            <Download className="h-3 w-3 mr-2" />
                            Results
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50" 
                            disabled={test.status === "Pending"}
                          >
                            Prepare
                          </Button>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            ) : (
              <div className="text-center py-10 bg-purple-600/5 rounded-xl border border-purple-300/10">
                <AlertCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-200">No lab tests match your search.</p>
              </div>
            )}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl shadow-lg p-6 border border-purple-300/20"
        >
          <h2 className="text-lg font-semibold mb-6 text-purple-100">Common Lab Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Complete Blood Count", 
                desc: "Evaluates overall health and detects disorders",
                icon: "droplet"
              },
              {
                name: "Comprehensive Metabolic Panel", 
                desc: "Checks kidney and liver function, sugar levels",
                icon: "activity"
              },
              {
                name: "Lipid Panel", 
                desc: "Assesses cholesterol and triglyceride levels",
                icon: "heart"
              },
            ].map((test, index) => (
              <motion.div 
                key={index} 
                className="border border-purple-300/20 rounded-xl p-5 hover:border-purple-400/40 cursor-pointer transition-all hover:shadow-lg hover:shadow-purple-700/10 bg-purple-600/5"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center mb-3">
                  <FileText className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="font-medium text-purple-100 mb-1">{test.name}</h3>
                <p className="text-sm text-purple-200/70 mb-3">{test.desc}</p>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="text-purple-300 hover:text-purple-200 p-0"
                >
                  Request Test
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LabTests;