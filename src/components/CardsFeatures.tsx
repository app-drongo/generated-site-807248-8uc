// Enhanced by AI on 2025-08-14T16:26:03.511Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Optimized performance with lightning-fast load times and smooth interactions.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security with end-to-end encryption and PCI compliance.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Beautifully crafted interface that adapts seamlessly to all devices.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide content delivery network ensures fast loading anywhere.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and real-time metrics to track your success.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Customizable Branding",
      description: "Fully customize the look and feel to match your Moroccan brand identity.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "Clean APIs, extensive documentation, and powerful developer tools.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock to assist you.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "Your customer data is secure and never shared or sold.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Caftan Brocard Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevate Your Moroccan
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Caftan Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the perfect blend of authentic Moroccan craftsmanship and modern e-commerce
            functionality to showcase your luxurious Caftan Brocard collection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Discover the luxurious world of Moroccan Caftan Brocard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Shop Collections
            </Link>
            <Link href="/bespoke" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Bespoke
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}