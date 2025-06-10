import { Server, Cloud, LineChart, Github, CloudCog, CloudLightningIcon, CloudHailIcon } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  icon: LucideIcon;
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    title: "End to End DevOps Implementation",
    description: "Implemented a complete DevOps pipeline using Docker, GitHub Actions, ArgoCD, Helm and deployed on Amazon EKS.",
    tags: ["AWS", "GitHub Action", "Docker","Kubernetes", "ArgoCD", "Helm", "EKS"],
    color: "from-blue-400 to-blue-600",
    icon: CloudCog,
    links: {
      demo: "https://github.com/anandu-k-c/Go-Web-App-DevOps"
    }
  },
  {
    title: "Implemented Three Tier Architecture - AWS",
    description: "The Stan’s Robot Shop application is a three tier architecture consisting of a Frontend,Backend and Database.",
    tags: ["AWS","Kubernetes", "Docker","EKS","ALB","IAM","VPC","EC2","Ingress"],
    color: "from-purple-400 to-purple-600",
    icon: Server,
    links: {
      demo: "https://github.com/anandu-k-c/Stans-Robot-Shop-EKS"
    }
  },
  {
    title: "Implemented Cloud Cost Optimization - AWS",
    description: "Used the combination of AWS CloudWatch and Lambda Function to decrease the cloud cost.",
    tags: ["AWS", "Lambda","boto3", "Python", "CloudWatch","SNS","Alarms"],
    color: "from-green-400 to-green-600",
    icon: Cloud,
    links: {
      demo: "https://github.com/anandu-k-c/AWS-Cost-Optimization"
    }
  }
];