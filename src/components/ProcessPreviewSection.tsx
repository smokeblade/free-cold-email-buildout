import React from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

const ProcessPreviewSection = () => {
  const steps = [
    {
      id: "01",
      title: "Profile Analysis",
      description: "Your requirements analyzed and matched with our database of pre-vetted VAs",
      status: "completed",
      time: "Hour 1"
    },
    {
      id: "02", 
      title: "VA Shortlisting",
      description: "Top 3 matching VAs identified based on skills, experience, and availability",
      status: "completed",
      time: "Hour 6"
    },
    {
      id: "03",
      title: "Interview Scheduling",
      description: "Interviews scheduled with your shortlisted VAs for final selection",
      status: "in_progress",
      time: "Hour 24"
    },
    {
      id: "04",
      title: "Onboarding Ready",
      description: "Selected VA ready to start with full onboarding and tool access setup",
      status: "pending",
      time: "Hour 48"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real-Time Matching Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your VA matching progress in real-time with our sophisticated matching dashboard
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">VA Matching Request</h3>
                  <p className="text-gray-400 text-sm">Request #VM-2024-001847</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-400 text-sm font-medium">In Progress</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4 bg-gray-50 border-b">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Matching Progress</span>
                <span className="text-sm text-gray-600">75% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Steps */}
            <div className="p-6">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    {/* Step Number/Status */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step.status === 'completed' 
                        ? 'bg-blue-100 text-blue-700'
                        : step.status === 'in_progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : step.status === 'in_progress' ? (
                        <Clock className="w-5 h-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-semibold ${
                          step.status === 'completed' 
                            ? 'text-blue-900' 
                            : step.status === 'in_progress'
                            ? 'text-blue-900'
                            : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          step.status === 'completed' 
                            ? 'bg-blue-100 text-blue-700' 
                            : step.status === 'in_progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {step.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[2.5rem] mt-10 w-px h-6 bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Last updated: 2 minutes ago
              </div>
              <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">
              Get instant notifications via email and SMS as each matching milestone is completed
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Matching</h3>
            <p className="text-gray-600">
              Our AI handles all VA screening and matching while you focus on growing your business
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Access</h3>
            <p className="text-gray-600">
              Access detailed VA profiles, work samples, and interview feedback instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreviewSection; 