
import { Link } from "react-router-dom"
import {Label} from "../Components/ui/label.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../Components/ui/card.tsx";
import {Input} from "../Components/ui/input.tsx";
import {Button} from "../Components/ui/button.tsx";

export default function Login() {
    return (
        <div className="mt-28">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to continue</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required/>
                        </div>
                        <Link to="/dashboard">
                            <Button className="w-full">Login</Button>
                        </Link>
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Don’t have an account?{" "}
                                <Link to="/signup" className="text-blue-600 hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}