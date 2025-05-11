"use client";

import { useState } from "react";

const AVAILABLE_TAGS = [
  "Kubernetes",
  "AWS Lambda",
  "GitHub",
  "OIDC Auth",
  "GCP",
  "PostgreSQL",
  "S3",
  "Bitbucket",
  "Azure",
];

export default function TagSelector() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-full max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Select your Tags</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {AVAILABLE_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
              selectedTags.includes(tag)
                ? "bg-white text-gray-900 border-white"
                : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Selected Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map(tag => (
              <span
                key={tag}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
