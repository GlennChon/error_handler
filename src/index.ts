/* eslint-disable import/first */
import 'dotenv/config'
import { Request, Response } from 'express'
import { ErrorModel } from '@/types'
import { initializeApp } from 'firebase-admin/app'
import {  getFirestore } from 'firebase-admin/firestore'
import { firebaseConfig } from './firebase.config'
/**
 * Responds to any HTTP request.
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 **/

export const errorHandler = async (
	req: Request<{}, {}, ErrorModel>,
	res: Response,
) => {
	let statusCode:number
	let responseBody:any
	res.set('Access-Control-Allow-Origin', '*')
	if (req.method === 'OPTIONS') {
	  // Send response to OPTIONS requests
		res.set({
		  'Access-Control-Allow-Methods': 'GET, POST',
		  'Access-Control-Allow-Headers': 'Content-Type',
		  'Content-Type': 'application/json',
		  'Access-Control-Max-Age': '3600',
		})
		statusCode = 204
		responseBody = ''	  
		return res.status(statusCode).send(responseBody)
	}
	try {	
		const error = req.body
		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		// Initialize Cloud Firestore and get a reference to the service
		const db = getFirestore(app);
		// Add error to database
		const docRef = await db.collection('errors').add(error)
		// Return success response with docRef id
		return res.status(201).send(`Logged error id: ${docRef.id}`)
	} catch (err) {
		console.error(err)
		statusCode = err.errno || 500
		responseBody = err.message || 'Unknown error'
		return
	} finally {
		return res.status(statusCode).send(responseBody)
	}
}

process.on('unhandledRejection', (err: Error): void => {
	console.error(err.message)
	process.exitCode = 1
})