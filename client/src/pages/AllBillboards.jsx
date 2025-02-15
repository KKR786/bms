import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { 
  MapPin, 
  Image, 
  Info, 
  Ruler,
  Calendar,
  DollarSign,
  Search,
  Filter,
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const BillboardBooking = () => {

    const navigate = useNavigate();
  const [selectedBillboard, setSelectedBillboard] = useState(null);
  const [bookingDates, setBookingDates] = useState({ start: '', end: '' });
  
  const billboards = [
    {
      billboardId: 'BB001',
      title: 'Times Square Billboard',
      address: '123 Broadway',
      city: 'New York',
      state: 'NY',
      zipCode: '10036',
      latitude: '40.758896',
      longitude: '-73.985130',
      dimensions: {
        width: '20',
        height: '10',
      },
      dailyRate: '500',
      minimumBookingDays: '7',
      illuminated: true,
      digital: true,
      description: 'A high-traffic billboard in the heart of Times Square.',
      surroundingArea: 'Surrounded by shops, restaurants, and theaters.',
      restrictions: 'No alcohol or tobacco ads.',
      facing: 'north',
      image: '/api/placeholder/400/200'
    },
    {
      billboardId: 'BB002',
      title: 'Sunset Strip Billboard',
      address: '456 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90069',
      latitude: '34.092809',
      longitude: '-118.328661',
      dimensions: {
        width: '30',
        height: '15',
      },
      dailyRate: '700',
      minimumBookingDays: '5',
      illuminated: true,
      digital: false,
      description: 'A prime billboard on the iconic Sunset Strip.',
      surroundingArea: 'Near popular nightclubs and entertainment venues.',
      restrictions: 'No political ads.',
      facing: 'west',
      image: '/api/placeholder/400/200'
    },
    {
      billboardId: 'BB003',
      title: 'Downtown Chicago Billboard',
      address: '789 Michigan Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60611',
      latitude: '41.895964',
      longitude: '-87.624333',
      dimensions: {
        width: '25',
        height: '12',
      },
      dailyRate: '450',
      minimumBookingDays: '3',
      illuminated: false,
      digital: false,
      description: 'A classic billboard in downtown Chicago.',
      surroundingArea: 'Close to Millennium Park and the Art Institute.',
      restrictions: 'No adult content.',
      facing: 'east',
      image: '/api/placeholder/400/200'
    }
  ];

  const handleBookNow = (billboard) => {
    setSelectedBillboard(billboard);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Book a Billboard</h1>
        <p className="text-gray-500 mt-1">Browse and book premium advertising spaces</p>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search billboards by location or name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
          <Filter className="w-4 h-4 text-gray-500" />
          <span>Filters</span>
        </button>
      </div>

      {/* Billboard Listings */}
      <div className="space-y-6">
        {billboards.map((billboard) => (
          <Card key={billboard.billboardId} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Billboard Image */}
              <div className="w-full md:w-1/3">
                <img 
                  src={billboard.image} 
                  alt={billboard.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '300px' }}
                />
              </div>

              {/* Billboard Details */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{billboard.title}</h2>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{billboard.address}, {billboard.city}, {billboard.state}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    billboard.digital ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {billboard.digital ? 'Digital' : 'Static'}
                  </span>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-4 h-4 mr-2" />
                    <span>{billboard.dimensions.width}' × {billboard.dimensions.height}'</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Min {billboard.minimumBookingDays} days</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>{billboard.illuminated ? 'Illuminated' : 'Not Illuminated'}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Info className="w-4 h-4 mr-2" />
                    <span>Facing {billboard.facing}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{billboard.description}</p>

                {/* Booking Section */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div>
                    <p className="text-gray-500">Daily Rate</p>
                    <p className="text-2xl font-semibold">${billboard.dailyRate}</p>
                  </div>
                  <button
                    onClick={() => navigate("/bookbillboards")}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Details (expandable) */}
            <div className="px-6 py-4 bg-gray-50 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <strong>Surrounding Area:</strong>
                  <p className="text-gray-600">{billboard.surroundingArea}</p>
                </div>
                <div>
                  <strong>Restrictions:</strong>
                  <p className="text-gray-600">{billboard.restrictions}</p>
                </div>
                <div>
                  <strong>Location Coordinates:</strong>
                  <p className="text-gray-600">{billboard.latitude}, {billboard.longitude}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BillboardBooking;