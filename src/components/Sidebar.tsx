import React, { useState } from 'react';
import { Search, Filter, ChevronRight, ChevronDown } from 'lucide-react';
import { ExplorationMode, FilterGroup } from '../types';
import { placesFilters, activitiesFilters } from '../data/filters';

interface SidebarProps {
  open: boolean;
  mode: ExplorationMode;
}

const Sidebar: React.FC<SidebarProps> = ({ open, mode }) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  
  const filters = mode === 'place' ? placesFilters : activitiesFilters;
  
  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };
  
  if (!open) return null;
  
  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex-shrink-0 overflow-y-auto transition-all duration-300 ease-in-out h-[calc(100vh-10rem)]">
      <div className="p-4">
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={`Search ${mode === 'place' ? 'places' : 'activities'}...`}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">
            {mode === 'place' ? 'Places Filters' : 'Activities Filters'}
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
            <Filter size={16} className="mr-1" />
            Reset
          </button>
        </div>
        
        <div className="space-y-3">
          {filters.map((group) => (
            <FilterGroupComponent
              key={group.id}
              group={group}
              expanded={expandedGroups[group.id] ?? true}
              toggleExpand={() => toggleGroup(group.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

interface FilterGroupComponentProps {
  group: FilterGroup;
  expanded: boolean;
  toggleExpand: () => void;
}

const FilterGroupComponent: React.FC<FilterGroupComponentProps> = ({ 
  group, 
  expanded, 
  toggleExpand 
}) => {
  return (
    <div className="border border-slate-200 rounded-md overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
        onClick={toggleExpand}
      >
        <span className="font-medium text-slate-700">{group.label}</span>
        {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      
      {expanded && (
        <div className="p-3 space-y-2">
          {group.options.map((option) => (
            <div key={option.id} className="flex items-start">
              {option.type === 'checkbox' && (
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-slate-700">{option.label}</span>
                </label>
              )}
              
              {option.type === 'select' && option.options && (
                <div className="w-full">
                  <label className="block text-sm text-slate-700 mb-1">{option.label}</label>
                  <select className="w-full rounded-md border border-slate-300 py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">All</option>
                    {option.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              )}
              
              {option.type === 'range' && option.min !== undefined && option.max !== undefined && (
                <div className="w-full">
                  <label className="block text-sm text-slate-700 mb-1">{option.label}</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="range" 
                      min={option.min} 
                      max={option.max} 
                      className="w-full" 
                    />
                    <span className="text-xs text-slate-500">100 km</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;