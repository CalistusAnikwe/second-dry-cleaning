'use client'
import { useState } from 'react';

export default function BookNowPage() {
  const [selectedService, setSelectedService] = useState('Couture Care');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    address: '',
    suite: '',
    instructions: '',
    date: '14',
    time: '10:00 AM - 12:00 PM'
  });

  const handleConfirm = async () => {
    if (!formData.address) {
      alert("Please enter a pickup address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/confirm-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          recipientEmail: 'calistusmine@gmail.com' 
        }),
      });

      if (response.ok) {
        alert("Success! Calistus has been notified of your pickup request.");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-sans font-light text-gray-900 mb-4">
            Book Your <span className="font-bold">Premium Care</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Experience white-glove garment handling. Tailored for your most delicate collections.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* 1. SELECT SERVICE */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="bg-[#E9EFFD] text-[#1E4FD9] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">1</span>
                Select Your Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Couture Care', 'Leather & Suede', 'Fine Linens'].map((name) => (
                  <div 
                    key={name}
                    onClick={() => setSelectedService(name)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedService === name ? 'border-[#1E4FD9] bg-[#F4F7FF]' : 'border-gray-50 hover:border-gray-200'}`}
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">✨</div>
                    <h4 className="font-bold text-sm mb-2">{name}</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Specialized treatment for designer labels.</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. SCHEDULE PICKUP */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="bg-[#E9EFFD] text-[#1E4FD9] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">2</span>
                Schedule Pickup
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Select Date</p>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {[12, 13, 14, 15, 16, 17].map((date) => (
                      <div 
                        key={date} 
                        onClick={() => setFormData({...formData, date: date.toString()})}
                        className={`min-w-60px p-3 rounded-xl text-center cursor-pointer transition-colors ${formData.date === date.toString() ? 'bg-[#1E4FD9] text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
                      >
                        <p className="text-[9px] uppercase">Mon</p>
                        <p className="text-sm font-bold">{date}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Arrival Window</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['08:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '02:00 PM - 04:00 PM'].map((time) => (
                      <div 
                        key={time} 
                        onClick={() => setFormData({...formData, time: time})}
                        className={`py-3 px-4 rounded-xl border text-[10px] font-bold text-center cursor-pointer ${formData.time === time ? 'bg-[#1E4FD9] text-white border-transparent' : 'bg-white border-gray-100 text-gray-500'}`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. PICKUP DETAILS */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="bg-[#E9EFFD] text-[#1E4FD9] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">3</span>
                Pickup Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Address</label>
                  <input 
                    type="text" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="123 Luxury Ave, Lagos" 
                    className="w-full bg-gray-50 border-none p-4 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-100" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Suite / Apartment</label>
                  <input 
                    type="text" 
                    value={formData.suite}
                    onChange={(e) => setFormData({...formData, suite: e.target.value})}
                    placeholder="Penthouse B" 
                    className="w-full bg-gray-50 border-none p-4 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-100" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Special Instructions</label>
                <textarea 
                  rows={3} 
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  placeholder="Gate code: 5432. Please leave at concierge." 
                  className="w-full bg-gray-50 border-none p-4 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-100 resize-none" 
                />
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-6">Booking Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Service</span>
                  <span className="font-bold">{selectedService}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Pickup Date</span>
                  <span className="font-bold">Feb {formData.date}, 2026</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Time Window</span>
                  <span className="font-bold">{formData.time}</span>
                </div>
              </div>
              
              <button 
                onClick={handleConfirm}
                disabled={loading}
                className={`w-full bg-[#1E4FD9] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending Request...' : 'Confirm Pickup'} <span>→</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}