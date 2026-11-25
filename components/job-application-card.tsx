import { Column, JobApplication } from "@/lib/models/models.types"
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface JobApplcationCardProps {
  job: JobApplication;
  columns: Column[];
}

export default function JobApplicationCard({ job, columns }: JobApplcationCardProps) {
  return (
    <>
      <Card>
        <CardContent>
          <div>
            <div>
              <h3>{job.position}</h3>
              <p>{job.company}</p>
              {job.description && <p>{job.description}</p>}
              {job.tags && job.tags.length > 0 && (
                <div>
                  {job.tags.map((tag, key) => (
                    <span key={key}>{tag}</span>
                  ))}
                </div>
              )}

              {job.jobUrl && (
                <a target="_blank" href={job.jobUrl}>
                  <ExternalLink />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}