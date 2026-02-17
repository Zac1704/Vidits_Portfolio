import React from "react";
import {
  Users,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  Layers,
  Palette,
  Info,
  XCircle,
  Clock,
  FileText,
  FolderOpen,
  Calendar,
  Search,
  Settings,
  Plus,
  Download,
  Upload,
  Edit2,
  Trash2,
  Eye,
  Filter,
  ChevronRight,
  TrendingUp,
  Home,
  Mail,
  Bell,
  Star,
} from "lucide-react";

export function DesignSystemSection() {
  return (
    <>
      {/* Color Palette */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl mb-6 text-gray-900">Color Palette</h3>

        {/* Primary Colors */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Primary Colors</p>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="bg-[#06c] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Primary Blue</p>
              <p className="text-sm text-gray-600">#0066FF</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#0052CC] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Primary Dark</p>
              <p className="text-sm text-gray-600">#0052CC</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#E6F0FF] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Primary Subtle BG</p>
              <p className="text-sm text-gray-600">#E6F0FF</p>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Semantic Colors</p>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="bg-[#10b981] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Success</p>
              <p className="text-sm text-gray-600">#00875A</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#f59e0b] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Warning</p>
              <p className="text-sm text-gray-600">#FF991F</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#ef4444] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Error</p>
              <p className="text-sm text-gray-600">#DE350B</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#0052CC] h-24 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Info</p>
              <p className="text-sm text-gray-600">#0052CC</p>
            </div>
          </div>
        </div>

        {/* Grayscale */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Grayscale</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-3">
            <div>
              <div className="bg-white h-20 rounded-lg border border-gray-300 mb-2"></div>
              <p className="text-xs text-gray-900">White</p>
              <p className="text-xs text-gray-600">#FFFFFF</p>
            </div>
            <div>
              <div className="bg-[#F7F8F9] h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Gray 100</p>
              <p className="text-xs text-gray-600">#F7F8F9</p>
            </div>
            <div>
              <div className="bg-[#EBECF0] h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Gray 200</p>
              <p className="text-xs text-gray-600">#EBECF0</p>
            </div>
            <div>
              <div className="bg-[#DFE1E6] h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Gray 300</p>
              <p className="text-xs text-gray-600">#DFE1E6</p>
            </div>
            <div>
              <div className="bg-[#6B778C] h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Gray 500</p>
              <p className="text-xs text-gray-600">#6B778C</p>
            </div>
            <div>
              <div className="bg-[#42526E] h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Gray 700</p>
              <p className="text-xs text-gray-600">#42526E</p>
            </div>
            <div>
              <div className="bg-[#1A1D23] h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Gray 900</p>
              <p className="text-xs text-gray-600">#1A1D23</p>
            </div>
            <div>
              <div className="bg-black h-20 rounded-lg border border-gray-200 mb-2"></div>
              <p className="text-xs text-gray-900">Black</p>
              <p className="text-xs text-gray-600">#000000</p>
            </div>
          </div>
        </div>

        {/* UI Specific */}
        <div>
          <p className="text-sm text-gray-600 mb-4">UI Specific</p>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="bg-[#2C3340] h-20 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Sidebar BG</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#06c] h-20 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Sidebar Active</p>
            </div>
            <div className="flex-1">
              <div className="bg-[#A4A9B5] h-20 rounded-lg border border-gray-200 mb-3"></div>
              <p className="text-sm text-gray-900">Sidebar Text</p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="mt-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl mb-6 text-gray-900">Typography</h3>

        {/* Font Families */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Font Families</p>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Primary: Inter</p>
              <p className="text-lg text-gray-900">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Monospace: IBM Plex Mono
              </p>
              <p className="text-sm font-mono text-gray-900">
                AUD-2025-001 • 0x4A3B2C1D
              </p>
            </div>
          </div>
        </div>

        {/* Headings */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Headings</p>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h1 className="text-3xl text-gray-900">Heading 1</h1>
              <p className="text-sm text-gray-600 mt-2">
                text-3xl • font-weight: 600
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h2 className="text-2xl text-gray-900">Heading 2</h2>
              <p className="text-sm text-gray-600 mt-2">
                text-2xl • font-weight: 600
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl text-gray-900">Heading 3</h3>
              <p className="text-sm text-gray-600 mt-2">
                text-lg • font-weight: 600
              </p>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div>
          <p className="text-sm text-gray-600 mb-4">Body Text</p>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-lg text-gray-900">
                Body Regular - Default body text for readability and
                consistency.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                text-base • font-weight: 400
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600">
                Body Small - For captions, labels, and secondary information.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                text-sm • font-weight: 400
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl mb-6 text-gray-900">Buttons</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-4">Button Variants</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#06c] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-[10px] md:text-sm">
                Primary Button
              </button>
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-[10px] md:text-sm">
                Secondary Button
              </button>
              <button className="bg-[#F7F8F9] text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-[10px] md:text-sm">
                Ghost Button
              </button>
              <button className="text-gray-900 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-[10px] md:text-sm">
                Danger Button
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-4">Button Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-[#06c] text-white px-3 py-1.5 rounded text-[10px] md:text-xs">
                Small
              </button>
              <button className="bg-[#06c] text-white px-4 py-2 rounded-lg text-[10px] md:text-sm">
                Medium
              </button>
              <button className="bg-[#06c] text-white px-6 py-3 rounded-lg text-[10px] md:text-base">
                Large
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-900 mb-3">Usage Guidelines</p>
            <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-gray-600 text-sm">•</span>
                <p className="text-sm text-gray-600">
                  Use Primary for main actions (Create, Save, Submit)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-600 text-sm">•</span>
                <p className="text-sm text-gray-600">
                  Use Secondary for supporting actions (Cancel, Back)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-600 text-sm">•</span>
                <p className="text-sm text-gray-600">
                  Use Ghost for tertiary actions (View More, Details)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-600 text-sm">•</span>
                <p className="text-sm text-gray-600">
                  Use Danger for destructive actions (Delete, Remove)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Badges & Labels */}
      <div className="mt-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl mb-6 text-gray-900">Status Badges & Labels</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-4">Status Badges</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-600 rounded-full text-sm">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Completed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                In Progress
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-500 rounded-full text-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Overdue
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-900 rounded-full text-sm">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                Not Started
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-4">Priority Labels</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-red-100 text-red-500 rounded text-sm">
                High Priority
              </span>
              <span className="px-3 py-1.5 bg-orange-100 text-orange-600 rounded text-sm">
                Medium Priority
              </span>
              <span className="px-3 py-1.5 bg-gray-200 text-gray-600 rounded text-sm">
                Low Priority
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="mt-8 bg-white p-4 md:p-8 rounded-xl border border-gray-200 shadow-sm p-[32px]">
        <h3 className="text-xl mb-6 text-gray-900">Icons</h3>

        {/* Icon Library */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-2">Lucide React Icons</p>
          <p className="text-sm text-gray-600 mb-5">
            Primary icon library used throughout the application
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Check
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <XCircle className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                X
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <AlertCircle className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Alert
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Clock className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Clock
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                File
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <FolderOpen className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Folder
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Users
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Calendar
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Search
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Settings
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Plus className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Plus
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Download
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Upload className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Upload
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Edit2 className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Edit
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Trash2 className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Trash
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Eye
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Filter
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Chevron
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <BarChart3 className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Chart
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 md:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <TrendingUp className="w-5 h-5 text-gray-700" />
              <p className="text-[10px] md:text-xs text-gray-900 text-center">
                Trending
              </p>
            </div>
          </div>
        </div>

        {/* Icon Sizes */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Icon Sizes</p>
          <div className="flex flex-wrap gap-4 md:gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-4 h-4 text-gray-900" />
              <p className="text-xs text-gray-600">16px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-5 h-5 text-gray-900" />
              <p className="text-xs text-gray-600">20px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-6 h-6 text-gray-900" />
              <p className="text-xs text-gray-600">24px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-8 h-8 text-gray-900" />
              <p className="text-xs text-gray-600">32px</p>
            </div>
          </div>
        </div>

        {/* Icon Colors */}
        <div>
          <p className="text-sm text-gray-600 mb-4">Icon Colors</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <p className="text-sm text-gray-900">Success</p>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
              <p className="text-sm text-gray-900">Warning</p>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-sm text-gray-900">Error</p>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 shrink-0" />
              <p className="text-sm text-gray-900">Primary</p>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500 shrink-0" />
              <p className="text-sm text-gray-900">Default</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing & Layout */}
      <div className="mt-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl mb-6 text-gray-900">Spacing & Layout</h3>

        {/* Border Radius */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Border Radius</p>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="bg-gray-200 h-16 rounded border border-gray-300"></div>
              <p className="mt-2 text-sm text-gray-900">Input: 4px</p>
            </div>
            <div>
              <div className="bg-gray-200 h-16 rounded-md border border-gray-300"></div>
              <p className="mt-2 text-sm text-gray-900">Button: 6px</p>
            </div>
            <div>
              <div className="bg-gray-200 h-16 rounded-lg border border-gray-300"></div>
              <p className="mt-2 text-sm text-gray-900">Card: 8px</p>
            </div>
            <div>
              <div className="bg-gray-200 h-16 rounded-full border border-gray-300"></div>
              <p className="mt-2 text-sm text-gray-900">Full: 9999px</p>
            </div>
          </div>
        </div>

        {/* Spacing Scale */}
        <div>
          <p className="text-sm text-gray-600 mb-4">Spacing Scale (Tailwind)</p>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-8 w-1"></div>
              <p className="text-sm text-gray-900">1 = 4px</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-8 w-2"></div>
              <p className="text-sm text-gray-900">2 = 8px</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-8 w-3"></div>
              <p className="text-sm text-gray-900">3 = 12px</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-8 w-4"></div>
              <p className="text-sm text-gray-900">4 = 16px</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-8 w-6"></div>
              <p className="text-sm text-gray-900">6 = 24px</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-8 w-8"></div>
              <p className="text-sm text-gray-900">8 = 32px</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
