import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Testimonial } from "@/components/Testimonial";

const Index = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Free Government Funded Courses</h1>
        <p className="text-lg">Guaranteed Job Interviews Upon Completion</p>
      </header>

      <section className="w-full max-w-4xl">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold mb-4">Explore Our Courses</h2>
          <p className="text-lg mb-6">
            Unlock new opportunities with our range of free government-funded courses. Get trained by expert instructors and secure a job interview upon completion.
          </p>
          <Button variant="primary" size="lg">Explore Courses</Button>
        </div>
      </section>

      <section className="w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="w-full sm:w-1/3">
            <CardHeader>
              <CardTitle>Free Government Funded</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All our courses are fully funded by the government, ensuring you receive quality education at no cost.</p>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-1/3">
            <CardHeader>
              <CardTitle>Guaranteed Job Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We provide guaranteed job interviews upon course completion, helping you step into your new career.</p>
            </CardContent>
          </Card>
          <Card className="w-full sm:w-1/3">
            <CardHeader>
              <CardTitle>Expert Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn from industry experts with years of experience and deep knowledge in their respective fields.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
        <div className="space-y-4">
          <Testimonial
            name="John Doe"
            text="This course changed my life! The instructors were amazing and I landed a job right after completing the course."
          />
          <Testimonial
            name="Jane Smith"
            text="I highly recommend these courses to anyone looking to advance their career. The job interview guarantee is a game-changer."
          />
        </div>
      </section>

      <footer className="w-full max-w-4xl text-center space-y-4">
        <p>Contact us: info@freecourses.com</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-500">Twitter</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Home</a>
          <a href="#" className="text-blue-500">Courses</a>
          <a href="#" className="text-blue-500">About Us</a>
          <a href="#" className="text-blue-500">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;