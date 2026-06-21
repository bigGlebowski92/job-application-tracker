'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export const TabsWithImage = () => {
  const [activeTab, setActiveTab] = useState('organize');

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab('organize')}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer ${activeTab === 'organize' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800'}`}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setActiveTab('hired')}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer ${activeTab === 'hired' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800'}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab('boards')}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer ${activeTab === 'boards' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800'}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === 'organize' && (
              <Image
                src="/hero-images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
                loading="eager"
              />
            )}
            {activeTab === 'hired' && (
              <Image
                src="/hero-images/hero2.png"
                alt="Get Hired"
                width={1200}
                height={800}
              />
            )}
            {activeTab === 'boards' && (
              <Image
                src="/hero-images/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
