"use client"

import React, {useState, useEffect} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import {AiOutlineDownload, AiOutlineZoomIn, AiOutlineZoomOut} from "react-icons/ai";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeViewer = () => {
    const [width, setWidth] = useState(1200);
    const [scale, setScale] = useState(1.7);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setScale(window.innerWidth > 786 ? 1.7 : 0.6);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        My Resume
                    </h1>
                    <p className="text-gray-400 text-lg">
                        View or download my professional resume
                    </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700 mb-8">
                    {loading && (
                        <div className="flex justify-center items-center h-96">
                            <div
                                className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
                        </div>
                    )}

                    <div className="flex justify-center">
                        <Document
                            file="/Kaveesha_Sulakshana.pdf"
                            onLoadSuccess={() => setLoading(false)}
                            className="max-w-full"
                        >
                            <Page
                                pageNumber={1}
                                scale={scale}
                                className="shadow-2xl rounded-lg overflow-hidden"
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        </Document>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setScale(prev => Math.max(prev - 0.2, 0.4))}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-white"
                        >
                            <AiOutlineZoomOut className="text-xl"/>
                            Zoom Out
                        </button>
                        <button
                            onClick={() => setScale(prev => Math.min(prev + 0.2, 2.5))}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-white"
                        >
                            <AiOutlineZoomIn className="text-xl"/>
                            Zoom In
                        </button>
                    </div>

                    <a
                        href="/Kaveesha_Sulakshana.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-white font-medium"
                    >
                        <AiOutlineDownload className="text-xl"/>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ResumeViewer;