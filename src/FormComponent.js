//usestate to manage formdata
import React, { useState } from 'react'
//used in dropdown menu of the footer and lucide is a library for open source icons
import { ChevronDown } from 'lucide-react'

export default function FormComponent() {
    //form initialization
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        company: '',
        employees: '',
        country: 'India',
        phone: ''
    })

    //handling form input changes
    const handleChange = (e) => {
        //e.target.name refers to the name attribute of the input field, and e.target.value is its new value. The ...formData spreads the existing formData and updates
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //handling form submission
    const handleSubmit = (e) => {
        //prevents page from refreshing which is default behavior pf html forms instead we can handle the form data using JavaScript
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div className="space-y-6">
                        <img src='https://www.salesforce.com/content/dam/web/en_au/www/images/events/dreamforce/df-logo-dark.png' alt='dreamforce logo' className="w-48" />
                        <h1 className='text-4xl font-bold text-blue-900'>Calling all Trailblazers. Dreamforce 2025 is coming.</h1>
                        <p className="text-xl">Fall 2025 | San Francisco & Salesforce+</p>
                        <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/form/dreamforce/df25-save-the-date.png" alt="Dreamforce" className="w-full rounded-lg shadow-lg" />
                        <p className="text-lg">Be the first to know when registration for Dreamforce 2025 opens. Get ready to mark your calendar for an epic celebration of customer success and the most impactful event for your business.</p>
                        <p className="text-lg">Join the list now to get the lowest price when registration opens. Plus, be the first to know all the big announcements, get first access to the best hotels, and so much more. We hope you join us for #DF25 to learn, connect, have fun, and give back.</p>
                    </div>
                    
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md m-38  mb-80 ">
                        <h2 className="text-2xl font-bold mb-6">Share a few details.</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    placeholder="Job title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select
                                    name="employees"
                                    value={formData.employees}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Employees</option>
                                    <option value="1-20">1 - 20 employees</option>
                                    <option value="21-50">21 - 50 employees</option>
                                    <option value="51-200">51 - 200 employees</option>
                                    <option value="201+">201+ employees</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>
                            <p className="text-sm text-gray-600">
                                By registering, you confirm that you agree to the{' '}
                                <a href="#" className="text-blue-600 hover:underline">Event Terms of Service</a> and
                                to the storing and processing of your personal data by Salesforce as
                                described in the <a href="#" className="text-blue-600 hover:underline">Privacy Statement</a>.
                            </p>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                JOIN THE LIST
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="bg-blue-900 text-white py-8 mt-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span className="font-bold">Worldwide</span>
                            <ChevronDown size={16} />
                        </div>
                        <nav className="space-x-4 text-sm flex flex-wrap">
                            <a href="#" className="hover:underline mb-2">Legal</a>
                            <a href="#" className="hover:underline mb-2">Terms of Service</a>
                            <a href="#" className="hover:underline mb-2">Privacy Information</a>
                            <a href="#" className="hover:underline mb-2">Responsible Disclosure</a>
                            <a href="#" className="hover:underline mb-2">Trust</a>
                            <a href="#" className="hover:underline mb-2">Contact</a>
                            <a href="#" className="hover:underline mb-2">Cookie Preferences</a>
                            <a href="#" className="hover:underline mb-2">Your Privacy Choices</a>
                        </nav>
                    </div>
                    <div className="text-sm">
                        <p>&copy; Copyright 2024 Salesforce, Inc. <a href="#" className="underline">All rights reserved</a>. Various trademarks held by their respective owners.</p>
                        <p className="mt-2">Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}




