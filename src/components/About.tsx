import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Craftsmanship Excellence",
      description: "Our caftans are meticulously handcrafted by skilled Moroccan artisans, preserving centuries-old techniques."
    },
    {
      icon: Lightbulb,
      title: "Authentic Moroccan Elegance",
      description: "We celebrate the rich cultural heritage of Morocco, infusing each caftan with timeless beauty and modern flair."
    },
    {
      icon: Heart,
      title: "Ethical & Sustainable",
      description: "We prioritize ethical sourcing and production practices, ensuring our caftans are environmentally and socially responsible."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From Morocco to the world, we're proud to share the enchanting art of caftan-making with customers worldwide."
    }
  ];

  const stats = [
    { value: "2015", label: "Founded", icon: Award },
    { value: "25K+", label: "Happy Customers", icon: Users },
    { value: "99.9%", label: "On-Time Delivery", icon: TrendingUp },
    { value: "30+", label: "Countries Served", icon: Globe }
  ];

  const team = [
    {
      name: "Fatima El Alami",
      role: "CEO & Co-Founder",
      image: "FE",
      bio: "Passionate about preserving Moroccan craftsmanship and bringing it to the world."
    },
    {
      name: "Karim Bennani",
      role: "Creative Director",
      image: "KB",
      bio: "Award-winning designer with a deep understanding of Moroccan design aesthetics."
    },
    {
      name: "Amina Bouchaib",
      role: "Head of Operations",
      image: "AB",
      bio: "Logistics expert ensuring seamless delivery of our handcrafted caftans globally."
    },
    {
      name: "Ahmed Laroui",
      role: "Master Embroiderer",
      image: "AL",
      bio: "Custodian of centuries-old embroidery techniques, bringing unparalleled craftsmanship to our caftans."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Celebrating the Art of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Moroccan Caftan-Making
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the timeless elegance and rich cultural heritage behind our exquisite Moroccan caftan collection.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, our journey began with a deep appreciation for the intricate craftsmanship and captivating beauty of traditional Moroccan caftans.
              </p>
              <p>
                Inspired by the vibrant cultural heritage of Morocco, we set out to share these timeless garments with the world, preserving the artistry of skilled Moroccan artisans and bringing their creations to a global audience.
              </p>
              <p>
                Today, we're proud to have built a thriving business that celebrates the art of caftan-making, empowering local communities and connecting customers worldwide with the enchanting essence of Morocco.
              </p>
            </div>
            <Button className="group">
              Discover Our Full Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "We believe in preserving the rich cultural heritage of Morocco, sharing its timeless beauty with the world."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Fatima El Alami, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our commitment to authentic Moroccan craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Passionate Team</h3>
            <p className="text-muted-foreground">
              The talented individuals dedicated to preserving and sharing the art of Moroccan caftan-making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "The craftsmanship and attention to detail in these caftans is truly unparalleled. They've become the centerpiece of our special events."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jamila Daoud</div>
                  <div className="text-sm text-muted-foreground">Event Planner, Moroccan Luxe Weddings</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}