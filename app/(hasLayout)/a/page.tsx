"use client"

import React from 'react'
import { render } from 'react-dom'
import { Form, Field, FormSpy } from 'react-final-form'
import { Button } from "@/components/ui/button"

export default function a() {
    const onSubmit = values => {
        console.log(values);
        console.log('>>>>>');
    }
    return (<Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'curly', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>First Name</label>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <div>
                <label>Last Name</label>
                <Field
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                />
                </div>
                <div>
                <label>Employed</label>
                    <Field name="employed" component="input" type="checkbox" />
                </div>
                <div>
                <label>Favorite Color</label>
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <Field name="favoriteColor" component="select">
                    <option />
                    <option value="#ff0000">❤️ Red</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                </Field>
                </div>
                <div>
                <label>Toppings</label>
                <Field name="toppings" component="select" multiple>
                    <option value="chicken">🐓 Chicken</option>
                    <option value="ham">🐷 Ham</option>
                    <option value="mushrooms">🍄 Mushrooms</option>
                    <option value="cheese">🧀 Cheese</option>
                    <option value="tuna">🐟 Tuna</option>
                    <option value="pineapple">🍍 Pineapple</option>
                </Field>
                </div>
                <div>
                <label>Sauces</label>
                <div>
                    <label>
                    <Field
                        name="sauces"
                        component="input"
                        type="checkbox"
                        value="ketchup"
                    />{' '}
                    Ketchup
                    </label>
                    <label>
                    <Field
                        name="sauces"
                        component="input"
                        type="checkbox"
                        value="mustard"
                    />{' '}
                    Mustard
                    </label>
                    <label>
                    <Field
                        name="sauces"
                        component="input"
                        type="checkbox"
                        value="mayonnaise"
                    />{' '}
                    Mayonnaise
                    </label>
                    <label>
                    <Field
                        name="sauces"
                        component="input"
                        type="checkbox"
                        value="guacamole"
                    />{' '}
                    Guacamole 🥑
                    </label>
                </div>
                </div>
                <div>
                <label>Best Stooge</label>
                <div>
                    <label>
                        <Field
                            name="stooge"
                            type="radio"
                            value="32"
                        >
                            {props => (
                                <input
                                    {...props.input}
                                    className="radio checked:bg-red-500" />
                            )}
                        </Field>
                        Red pill
                    </label>
                    <label>
                        <Field
                            name="stooge"
                            type="radio"
                            value="moe"
                        >
                            {props => (
                                <input
                                    {...props.input}
                                    className="radio checked:bg-red-500"
                                />
                            )}
                        </Field>
                        Moe
                    </label>
                    <label>
                        <Field
                            name="stooge"
                            type="radio"
                            value="curly"
                        >
                            {props => (<input
                                    {...props.input}
                                    className="radio checked:bg-red-500"
                                />
                            )}
                        </Field>
                        <span className="label-text">Curly</span> 
                    </label>
                </div>
                </div>
                <div>
                <label>Notes</label>
                <Field name="notes" component="textarea" placeholder="Notes" />
                </div>
                <div className="buttons">
                    <Button
                        disabled={submitting}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={form.reset}
                        disabled={submitting}
                    >
                        Reset
                    </Button>
                </div>
            </form>
            )}
    />)
};