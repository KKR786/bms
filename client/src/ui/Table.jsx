import React from 'react'

function Table({ title, button, headings, children }) {
  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-100">
    <div className="p-6 border-b border-gray-100">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div>
          {button}
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {headings.map((head, i) => 
              <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{head}</th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {children}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Table

