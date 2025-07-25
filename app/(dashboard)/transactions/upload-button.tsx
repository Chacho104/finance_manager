import { UploadIcon } from "lucide-react";

import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  // TODO: Add a paywall

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button size="sm" {...getRootProps()} className="w-full lg:w-auto">
          <UploadIcon className="size-4 mr-2" />
          Import
        </Button>
      )}
    </CSVReader>
  );
};
