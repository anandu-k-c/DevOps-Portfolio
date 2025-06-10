import { Cloud, Database, Server, GitBranch, Terminal, LineChart, ContainerIcon, Monitor, Shield, Github } from 'lucide-react';

export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["Amazon Web Services (AWS)", "Linux"],
    icon: Cloud,
    color: "from-blue-400 to-blue-600"
  },
  {
    category: "CI / CD",
    items: ["Jenkins", "GitHub Actions"],
    icon: GitBranch,
    color: "from-green-400 to-green-600"
  },

  {
    category: "Containerization & Orchestration",
    items: ["Docker", "Kubernetes"],
    icon: ContainerIcon,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible"],
    icon: Server,
    color: "from-purple-400 to-purple-600"
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
    icon: Github,
    color: "from-orange-400 to-orange-600"
  },
  {
    category: "Scripting & Automation",
    items: ["Bash Scripting", "Python"],
    icon: Terminal,
    color: "from-red-400 to-red-600"
  },
  {
    category: "Monitoring",
    items: ["Prometheus", "Grafana"],
    icon: LineChart,
    color: "from-teal-400 to-teal-600"
  },

  {
    category: "Operating Systems",
    items: ["Linux", "Unix"],
    icon: Monitor,
    color: "from-blue-400 to-blue-600"
  },
  {
    category: "Security",
    items: ["Secrets Management", "Security Scanning"],
    icon: Shield,
    color: "from-green-400 to-green-600"
  }


  
] as const;