import { PayloadRequest } from 'payload'

export const checkAvailabilityHandler = async (req: PayloadRequest): Promise<Response> => {
  try {
    const { machineId, startTime, endTime } = req.query

    // Xử lý logic nghiệp vụ ở đây...
    const existingBookings = await req.payload.find({
      collection: 'bookings',
      where: {
        and: [
          { machineId: { equals: machineId } },
          // ... các điều kiện khác
        ],
      },
    })

    return new Response(
      JSON.stringify({
        available: existingBookings.totalDocs === 0,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
