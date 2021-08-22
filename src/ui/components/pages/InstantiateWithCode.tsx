import React from 'react';
import { InstantiateCodeWizard } from '../instantiateFromCode';

export const InstantiateWithCode = () => {
  return (
    <>
      <div className="w-full max-w-7xl overflow-y-auto px-5 py-3 m-2">
        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-9 py-3 px-4">
            <div className="space-y-1 border-b pb-6 dark:border-gray-800 border-gray-200">
              <h1 className="text-2xl dark:text-white text-gray-700">
                Upload and Instantiate Contract
              </h1>
              <p className="dark:text-gray-400 text-gray-500 text-sm">
                You can instantiate a new contract from an existing code bundle here.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-5 m-1">
          <InstantiateCodeWizard />
        </div>
      </div>
    </>
  );
};
