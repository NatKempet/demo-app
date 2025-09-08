import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, User, Heart, Pill, FileText, Bell, Menu, X, ChevronRight, Star, AlertCircle } from 'lucide-react';

const CMUHealthApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState(3);


  const upcomingAppointments = [
    { id: 1, type: 'General Checkup', doctor: 'Dr. Sarah Chen', time: '2:00 PM', date: 'Today', location: 'Health Center - Room 201' },
    { id: 2, type: 'Mental Health', doctor: 'Dr. Michael Rodriguez', time: '10:30 AM', date: 'Tomorrow', location: 'Counseling Center' }
  ];

  const quickActions = [
    { icon: Calendar, label: 'Schedule Appointment', color: 'bg-blue-500' },
    { icon: Pill, label: 'Prescription Refill', color: 'bg-green-500' },
    { icon: FileText, label: 'Medical Records', color: 'bg-purple-500' },
    { icon: Phone, label: 'Emergency Contact', color: 'bg-red-500' }
  ];

  const healthMetrics = [
    { label: 'Sleep', value: '7.2h', status: 'good', color: 'text-green-600' },
    { label: 'Steps', value: '8,642', status: 'excellent', color: 'text-blue-600' },
    { label: 'Stress Level', value: 'Moderate', status: 'warning', color: 'text-yellow-600' }
  ];

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Heart },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'records', label: 'Health Records', icon: FileText },
    { id: 'wellness', label: 'Wellness Hub', icon: Star },
    { id: 'emergency', label: 'Emergency', icon: AlertCircle }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-purple-500 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome back, Alex!</h2>
            <p className="text-red-100">Chiang Mai University Student</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-purple-500 rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-sm">{action.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
          <button className="text-red-600 text-sm hover:text-red-700">View All</button>
        </div>
        <div className="space-y-3">
          {upcomingAppointments.map((apt) => (
            <div key={apt.id} className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">{apt.type}</h4>
                  <p className="text-gray-600 text-sm">{apt.doctor}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{apt.time} • {apt.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{apt.location}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Metrics */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Today's Health Metrics</h3>
        <div className="grid grid-cols-3 gap-3">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-600 mt-1">{metric.label}</p>
              <div className={`text-xs mt-2 ${metric.color} font-medium`}>
                {metric.status.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Schedule New
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Available Services</h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            'General Health Consultation',
            'Mental Health Counseling', 
            'Flu Shots & Immunizations',
            'Sexual Health Services',
            'Nutrition Counseling',
            'Physical Therapy'
          ].map((service, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <span className="font-medium">{service}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b">
            <div>
              <p className="font-medium">Annual Physical Exam</p>
              <p className="text-sm text-gray-600">Dr. Jennifer Walsh • Sep 1, 2025</p>
            </div>
            <span className="text-green-600 text-sm font-medium">Completed</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b">
            <div>
              <p className="font-medium">Blood Work Follow-up</p>
              <p className="text-sm text-gray-600">Dr. Sarah Chen • Aug 28, 2025</p>
            </div>
            <span className="text-green-600 text-sm font-medium">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWellness = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Wellness Hub</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Stress Management</h3>
          <p className="mb-4 opacity-90">Tools and resources to help manage academic stress</p>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
            Explore Resources
          </button>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Fitness Tracking</h3>
          <p className="mb-4 opacity-90">Monitor your physical activity and set wellness goals</p>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
            View Progress
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Campus Wellness Events</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Mindfulness Meditation Session</h4>
              <p className="text-sm text-gray-600">Tomorrow, 5:00 PM • Wellness Center</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Nutrition Workshop</h4>
              <p className="text-sm text-gray-600">Sep 12 • 3:00 PM • Student Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmergency = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Emergency Information</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="w-6 h-6 text-red-600" />
          <h3 className="text-lg font-semibold text-red-900">Emergency Contacts</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-medium">Campus Emergency</span>
            <a href="tel:911" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              911
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">CMU Police</span>
            <a href="tel:4122682323" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              (412) 268-2323
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Health Center After Hours</span>
            <a href="tel:4122688100" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              (412) 268-8100
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Nearest Hospitals</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">UPMC Presbyterian</p>
              <p className="text-sm text-gray-600">200 Lothrop St • 1.2 miles</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700">Get Directions</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Shadyside Hospital</p>
              <p className="text-sm text-gray-600">5230 Centre Ave • 2.1 miles</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700">Get Directions</button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Crisis Resources</h3>
        <div className="space-y-2">
          <p className="text-sm"><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
          <p className="text-sm"><strong>National Suicide Prevention Lifeline:</strong> 988</p>
          <p className="text-sm"><strong>CMU Counseling Crisis Line:</strong> (412) 268-2922</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'appointments':
        return renderAppointments();
      case 'wellness':
        return renderWellness();
      case 'emergency':
        return renderEmergency();
      default:
        return renderDashboard();
    }
  };

  return (
  <div className="h-screen flex items-center justify-center bg-gray-100">
    {/* App Container */}
    <div className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          {/* Left - Logo + Menu */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>    
              <h1 className="text-xl font-bold text-gray-900">CMU Health</h1>
            </div>
          </div>

          {/* Right - Notifications + User */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              {notifications > 0 && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">{notifications}</span>
                </div>
              )}
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Body (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 w-64 bg-black shadow-lg 
          z-30 transition-transform duration-300 ease-in-out h-full`}
        >
          <div className="flex items-center justify-between p-4 border-b lg:hidden">
            <h2 className="font-semibold text-gray-900">Navigation</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-black-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
<nav className="p-4 space-y-6">
{/* Internal Navigation */}
<div className="space-y-2">
  {navigation.map((item) => (
    <button
      key={item.id}
      onClick={() => {
        setActiveTab(item.id);
        setSidebarOpen(false);
      }}
      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors 
        bg-purple-500 text-white hover:bg-purple-600`}
    >
      <item.icon className="w-5 h-5" />
      <span className="font-medium">{item.label}</span>
    </button>
  ))}
</div>


  {/* External Resources */}
  <div>
    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
      CMU Resources
    </h3>
    <div className="space-y-2">
      <a 
        href="https://cmu.ac.th/th/firstyear/AccidentInsurance" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        Accident Insurance
      </a>
      <a 
        href="https://hr.oop.cmu.ac.th/menu/welfare/type-4" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        Student Welfare
      </a>
      <a 
        href="https://icdi.cmu.ac.th/Files/ORIENTATION%202024/Student%20Development%20Session/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B9%80%E0%B8%AB%E0%B8%95.pdf?fbclid=IwdGRjcAMrsYBleHRuA2FlbQIxMQABHjolGr1Osjz_u_XinC5MaBuBsbRrMbFrrIqGNFlj8Q_qo-9Pjea9aQV2VZNC_aem_RiHd8tVjzIpwo9vgObgdjg" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        Student Health Guide (PDF)
      </a>
      <a 
        href="https://sdd.oop.cmu.ac.th/service/healthservices?fbclid=IwdGRjcAMrsZlleHRuA2FlbQIxMQABHnWm2eE6KzqmQKbgce-Lp8HIrPej1WYMXAUJ0jyt8wGuUkyR9UuxEad8gDsB_aem_Vras0IlfW0v5N6oxZqcJmQ" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        Health Services
      </a>
      <a 
        href="https://www.facebook.com/share/19foV5pzSU/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        CMU Health Facebook
      </a>
    </div>
  </div>
</nav>
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CMUHealthApp;