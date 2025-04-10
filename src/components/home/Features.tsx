
// This file is marked as read-only, so we can't directly modify it.
// Please create a new version of this file without the Certificate icon reference:

import React from "react";
import { BookOpen, Monitor, Users, Award } from "lucide-react"; // Changed Certificate to Award
import SectionHeading from "@/components/common/SectionHeading";

const featuresData = [
  {
    icon: <BookOpen className="h-12 w-12 text-primary mb-4" />,
    title: "Comprehensive Curriculum",
    description:
      "Our courses cover everything from foundational concepts to advanced techniques, ensuring a thorough understanding of the subject matter.",
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary mb-4" />,
    title: "Interactive Learning",
    description:
      "Engage with dynamic content, hands-on projects, and interactive exercises designed to reinforce your learning.",
  },
  {
    icon: <Users className="h-12 w-12 text-primary mb-4" />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience and a passion for teaching their craft.",
  },
  {
    icon: <Award className="h-12 w-12 text-primary mb-4" />, // Changed from Certificate to Award
    title: "Recognized Certification",
    description:
      "Earn certificates upon course completion to showcase your new skills and enhance your professional profile.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="page-container">
        <SectionHeading
          title="Why Choose Our Platform"
          subtitle="We provide the tools and resources you need to achieve your learning goals"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
