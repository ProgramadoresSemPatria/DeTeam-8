"use client";

import {Link} from "next-view-transitions";
import { Github, X, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto border-t border-gray-200 bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block">
            lUIZAO
            </Link>
          </div>

          <div className="flex space-x-16">
            {/* Developers Column */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Developers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-sm text-gray-500 hover:text-gray-700">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="/connect" className="text-sm text-gray-500 hover:text-gray-700">
                    Conecte-se
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com" className="text-sm text-gray-500 hover:text-gray-700">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                    Audit Report
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-sm text-gray-500 hover:text-gray-700">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        {/* Mobile layout */}
            <div className="flex flex-col md:hidden">
              <div className="flex justify-center mb-8">
                <Link href="/" className="inline-block">
                lUIZAO
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {/* Developers Column */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 text-center sm:text-left">Developers</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Documentação
                      </Link>
                    </li>
                    <li>
                      <Link href="/connect" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Conecte-se
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        GitHub
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources Column */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 text-center sm:text-left">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Audit Report
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Changelog
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company Column */}
                <div className="col-span-2 sm:col-span-1 mt-8 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 text-center sm:text-left">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        X (Twitter)
                      </Link>
                    </li>
                    <li>
                      <Link href="/legal" className="text-sm text-gray-500 hover:text-gray-700 block text-center sm:text-left">
                        Legal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 md:flex justify-between items-center hidden">
              <div className="flex space-x-4">
                <Link href="https://github.com/" className="text-gray-400 hover:text-gray-600">
                  <Github size={16} />
                </Link>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </Link>
                <Link href="/" className="text-gray-400 hover:text-gray-600">
                  <Mail size={16} />
                </Link>
              </div>
            </div>

            {/* Mobile footer bottom */}
            <div className="mt-8 flex flex-col items-center space-y-4 md:hidden">
              <div className="flex space-x-4">
                <Link href="https://github.com/" className="text-gray-400 hover:text-gray-600">
                  <Github size={16} />
                </Link>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </Link>
                <Link href="/" className="text-gray-400 hover:text-gray-600">
                  <Mail size={16} />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}