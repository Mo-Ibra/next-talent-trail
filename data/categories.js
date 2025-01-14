import {
  Palette,
  Code,
  LineChart,
  Layout,
  Users,
  Database,
  Bot,
  Brain,
  DollarSign,
  Briefcase,
  Award,
  Shield,
} from "lucide-react";

export const homeCategories = [
  {
    icon: <Palette className="w-6 h-6 text-orange-500" />,
    title: "Design",
    courses: "189+ Jobs Available",
  },
  {
    icon: <Code className="w-6 h-6 text-orange-500" />,
    title: "Web Development",
    courses: "705+ Jobs Available",
  },
  {
    icon: <LineChart className="w-6 h-6 text-orange-500" />,
    title: "Digital Marketing",
    courses: "100+ Jobs Available",
  },
  {
    icon: <Layout className="w-6 h-6 text-orange-500" />,
    title: "UI/UX",
    courses: "50+ Jobs Available",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Leadership",
    courses: "50+ Jobs Available",
  },
  {
    icon: <Database className="w-6 h-6 text-orange-500" />,
    title: "Marketing & Sales",
    courses: "150+ Jobs Available",
  },
  {
    icon: <Bot className="w-6 h-6 text-orange-500" />,
    title: "Customer Help",
    courses: "150+ Jobs Available",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />,
    title: "Human Resources",
    courses: "50+ Jobs Available",
  },
];

export const jobCategories = [
  ...homeCategories,
  {
    icon: <DollarSign className="w-6 h-6 text-orange-500" />,
    title: "Sales",
    courses: "50+ Jobs Available",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-orange-500" />,
    title: "Accounting",
    courses: "150+ Jobs Available",
  },
  {
    icon: <Award className="w-6 h-6 text-orange-500" />,
    title: "User Experience",
    courses: "150+ Jobs Available",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Senior Management",
    courses: "50+ Jobs Available",
  },
];