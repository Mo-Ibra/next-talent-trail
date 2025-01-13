import { Palette, Code, LineChart, Layout, Users, Database, Bot, Brain } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    icon: <Palette className="w-6 h-6 text-orange-500" />,
    title: "Design",
    courses: "189+ Jobs Available"
  },
  {
    icon: <Code className="w-6 h-6 text-orange-500" />,
    title: "Web Development",
    courses: "705+ Jobs Available"
  },
  {
    icon: <LineChart className="w-6 h-6 text-orange-500" />,
    title: "Digital Marketing",
    courses: "100+ Jobs Available"
  },
  {
    icon: <Layout className="w-6 h-6 text-orange-500" />,
    title: "UI/UX",
    courses: "50+ Jobs Available"
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Leadership",
    courses: "50+ Jobs Available"
  },
  {
    icon: <Database className="w-6 h-6 text-orange-500" />,
    title: "Marketing & Sales",
    courses: "150+ Jobs Available"
  },
  {
    icon: <Bot className="w-6 h-6 text-orange-500" />,
    title: "Customer Help",
    courses: "150+ Jobs Available"
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />,
    title: "Human Resources",
    courses: "50+ Jobs Available" 
  }
]

function Categories1() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-orange-500 font-medium mb-3">Browse By <span className='font-bold uppercase'>Categories</span></p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore 1500+ Jobs Out There.
          </h2>
          <p className="text-muted-foreground">
            Discover thousands of job listings from top companies around the world. Search by keyword, category, or location, and kickstart your career now!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors duration-200">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.courses}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Brain className="absolute w-40 h-40 text-orange-500/5 bottom-10 right-20 -z-10" />
      </div>
    </section>
  )
}

export default Categories1;