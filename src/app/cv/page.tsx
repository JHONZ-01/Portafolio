import { PageHeader } from "@/components/pages/PageHeader";
import { CvViewer } from "@/components/sections/CvViewer";

export default function CvPage() {
  return (
    <>
      <PageHeader titleKey="pages.cv.title" subtitleKey="pages.cv.lead" />
      <CvViewer />
    </>
  );
}
