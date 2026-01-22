'use client'

import { RequirementsByType } from '@/lib/supabase/types'
import { useState } from 'react'
import { FileText, User, Users } from 'lucide-react'

interface ServiceRequirementsProps {
    requirementsByType?: RequirementsByType
    requirements?: string[] // Fallback to old format
}

export function ServiceRequirements({ requirementsByType, requirements }: ServiceRequirementsProps) {
    const [activeTab, setActiveTab] = useState<string>('owner')

    // If no requirements by type, show simple list
    if (!requirementsByType || Object.keys(requirementsByType).length === 0) {
        if (!requirements || requirements.length === 0) return null

        return (
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-blue-900" />
                    <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
                </div>
                <ul className="space-y-2">
                    {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-900"></span>
                            <span className="capitalize">{String(req)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const tabs = Object.keys(requirementsByType)
    const tabIcons: Record<string, typeof User> = {
        owner: User,
        representative: Users,
        parent: User,
        guardian: User,
    }

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
            </div>
            <p className="mb-6 text-gray-600">Documents needed for your application</p>

            {/* Tabs */}
            <div className="mb-6 flex flex-wrap gap-2">
                {tabs.map((tab) => {
                    const Icon = tabIcons[tab] || User
                    const isActive = activeTab === tab

                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${isActive
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                            <span className="capitalize">If You Are the {tab}</span>
                        </button>
                    )
                })}
            </div>

            {/* Requirements List */}
            <ul className="space-y-3">
                {requirementsByType[activeTab]?.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-900"></span>
                        <span className="text-gray-700">{req}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
