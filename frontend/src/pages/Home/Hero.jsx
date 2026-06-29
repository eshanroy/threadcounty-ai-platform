import Button from "../../components/common/Button";
import {
  ArrowRight,
  Upload,
  Sparkles,
  ScanSearch,
  BarChart3,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-medium">
              <Sparkles size={18} />
              AI Powered Textile Intelligence
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
              Transform
              <span className="block text-blue-600">
                Fabric Analysis
              </span>
              with AI
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Upload textile images and instantly receive AI-powered
              weave detection, thread density estimation, quality
              assessment and professional inspection reports.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

             <Button size="lg">
  Start Analysis
  <ArrowRight size={18} />
</Button>

<Button variant="secondary" size="lg">
  View Demo
</Button>

            </div>

            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  98%
                </h2>

                <p className="text-slate-500">
                  Detection Accuracy
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  10K+
                </h2>

                <p className="text-slate-500">
                  Images Processed
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  2 sec
                </h2>

                <p className="text-slate-500">
                  Average Analysis
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl border border-white p-10">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  AI Analysis
                </h2>

                <ScanSearch
                  size={34}
                  className="text-blue-600"
                />

              </div>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4 rounded-xl bg-slate-100 p-5">

                  <Upload className="text-blue-600" />

                  <div>

                    <h3 className="font-semibold">
                      Upload Fabric Image
                    </h3>

                    <p className="text-sm text-slate-500">
                      JPG, PNG supported
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-xl bg-slate-100 p-5">

                  <Sparkles className="text-indigo-600" />

                  <div>

                    <h3 className="font-semibold">
                      AI Detection
                    </h3>

                    <p className="text-sm text-slate-500">
                      Weave & Density Recognition
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-xl bg-slate-100 p-5">

                  <BarChart3 className="text-green-600" />

                  <div>

                    <h3 className="font-semibold">
                      Generate Report
                    </h3>

                    <p className="text-sm text-slate-500">
                      Download PDF Results
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;