import {
  Users,
  BarChart3,
  CheckCircle2,
  AlertCircle,
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
} from "lucide-react";

const IconsSection = () => {
  return (
    <div className=" bg-white p-4 md:p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="uppercase text-xl mb-6 text-gray-900">Icons</h3>

      {/* Icon Library */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-2">
          Lucide React Icons
        </p>
        <p className="uppercase text-sm text-gray-600 mb-5">
          Primary icon library used throughout the application
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2 md:gap-3 font-inter font-bold">
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
        <p className="uppercase text-sm text-gray-600 mb-4">Icon Sizes</p>
        <div className="flex flex-wrap gap-4 md:gap-6 items-end font-inter font-bold">
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
        <p className="uppercase text-sm text-gray-600 mb-4">Icon Colors</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-inter font-bold">
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
  );
};

export default IconsSection;
