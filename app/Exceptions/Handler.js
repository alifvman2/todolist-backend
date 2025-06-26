'use strict'

class Handler {
  async handle (error, { response }) {
    if (error.name === 'InvalidJwtToken') {
      return response.status(401).json({
        message: 'Token tidak valid atau rusak.'
      })
    }

    if (error.name === 'ExpiredJwtToken') {
      return response.status(401).json({
        message: 'Token sudah kedaluwarsa.'
      })
    }

    return response.status(error.status || 500).json({
      message: error.message || 'Terjadi kesalahan di server.'
    })
  }

  async report (error, { request }) {
    // Bisa untuk logging jika mau
    console.error(error)
  }
}

module.exports = Handler
