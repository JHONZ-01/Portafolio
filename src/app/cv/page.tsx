import { PageHeader } from "@/components/pages/PageHeader";
import { CvViewer } from "@/components/sections/CvViewer";

export default function CvPage() {
  return (
    <div className="py-12">
      <PageHeader titleKey="pages.cv.title" subtitleKey="pages.cv.subtitle" />
      <CvViewer />
    </div>
  );
}

