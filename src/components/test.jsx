/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NmsxJxtRscI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const test = () =>{
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
        <Button className="ml-auto w-8 h-8" size="icon" variant="ghost">
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-sm leading-none md:text-base">Premium T-shirt</h2>
              <h3 className="font-semibold text-sm leading-none md:text-base">$49.99</h3>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Button className="rounded-full w-6 h-6" size="icon" variant="outline">
                <MinusIcon className="w-4 h-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="border w-10 h-8 flex items-center justify-center">1</div>
              <Button className="rounded-full w-6 h-6" size="icon" variant="outline">
                <PlusIcon className="w-4 h-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
          <div className="border-t" />
          <div className="flex items-center gap-4">
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-sm leading-none md:text-base">Classic Hoodie</h2>
              <h3 className="font-semibold text-sm leading-none md:text-base">$69.99</h3>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Button className="rounded-full w-6 h-6" size="icon" variant="outline">
                <MinusIcon className="w-4 h-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="border w-10 h-8 flex items-center justify-center">2</div>
              <Button className="rounded-full w-6 h-6" size="icon" variant="outline">
                <PlusIcon className="w-4 h-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
          <div className="border-t" />
          <div className="flex items-center gap-4">
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-sm leading-none md:text-base">Sporty Sneakers</h2>
              <h3 className="font-semibold text-sm leading-none md:text-base">$89.99</h3>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Button className="rounded-full w-6 h-6" size="icon" variant="outline">
                <MinusIcon className="w-4 h-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="border w-10 h-8 flex items-center justify-center">1</div>
              <Button className="rounded-full w-6 h-6" size="icon" variant="outline">
                <PlusIcon className="w-4 h-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
          <div className="border-t" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <div className="font-semibold">Subtotal: $208.97</div>
          <Link className="ml-auto flex-1" href="#">
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}


export default test()