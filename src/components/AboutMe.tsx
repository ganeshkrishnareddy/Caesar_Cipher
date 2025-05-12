import React from 'react';
import { BookOpen, Award, Code2, Shield } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-1 rounded-xl">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Info</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <BookOpen size={18} className="text-cyan-400" />
                    <span>LPU Student</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award size={18} className="text-cyan-400" />
                    <span>CompTIA Network+ Certified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code2 size={18} className="text-cyan-400" />
                    <span>Cybersecurity Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield size={18} className="text-cyan-400" />
                    <span>Ethical Hacking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              About Me
            </h1>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I am P. Ganesh Krishna Reddy, a cybersecurity enthusiast and a student at Lovely Professional University (LPU), 
                currently pursuing my B.Tech in Computer Science. With a strong foundation in networking and access control mechanisms, 
                I have a growing interest in ethical hacking, system security, and user authentication protocols.
              </p>
              
              <p>
                Over the past few years, I have developed practical skills through academic projects and self-learning in areas like 
                firewalls, encryption, intrusion detection systems, and network monitoring tools such as Wireshark. I also cleared 
                the CompTIA Network+ global certification, which further strengthened my understanding of network infrastructure and 
                security protocols.
              </p>
              
              <p>
                My expertise includes working with essential cybersecurity tools like:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kali Linux for penetration testing</li>
                <li>Wireshark for network analysis</li>
                <li>Metasploit Framework for vulnerability assessment</li>
                <li>Burp Suite for web application security testing</li>
                <li>Nmap for network discovery and security auditing</li>
              </ul>
              
              <p>
                This Caesar Cipher project demonstrates my interest in cryptography and secure communication methods. 
                While it's a classical encryption technique, implementing it helps understand the fundamental concepts 
                of data encryption and the importance of secure communication in modern cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;