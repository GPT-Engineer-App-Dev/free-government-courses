import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const CourseDetails = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <header className="w-full max-w-4xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Course Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-4xl font-bold text-center mt-4">Course Title</h1>
      </header>

      <section className="w-full max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn the fundamentals of [Course Topic] in this comprehensive course. By the end of this course, you will have a solid understanding of [Key Objectives].</p>
            <p><strong>Duration:</strong> 12 weeks</p>
            <p><strong>Eligibility:</strong> Open to all individuals above 18 years old.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Curriculum</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Week 1: Introduction to [Course Topic]</li>
              <li>Week 2: Basics of [Course Topic]</li>
              <li>Week 3: Intermediate Concepts</li>
              <li>Week 4: Advanced Techniques</li>
              <li>Week 5-12: Practical Applications and Projects</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instructors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Instructor Name</h3>
                <p>Expert in [Field], with over 10 years of experience.</p>
              </div>
              <div>
                <h3 className="font-semibold">Instructor Name</h3>
                <p>Specialist in [Field], with a background in [Relevant Experience].</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enrollment Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Fill out the online application form.</li>
              <li>Submit the required documents.</li>
              <li>Attend an orientation session.</li>
              <li>Start your course and begin learning!</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">What is the cost of the course?</h3>
                <p>All our courses are fully funded by the government, so there is no cost to you.</p>
              </div>
              <div>
                <h3 className="font-semibold">How do I apply?</h3>
                <p>You can apply online by filling out the application form and submitting the required documents.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button variant="primary" size="lg">Enroll Now</Button>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;