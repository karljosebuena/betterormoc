#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Data Migration Script: BetterSolano → BetterOrmoc
 *
 * This script transforms Solano's data to Ormoc format and generates
 * SQL insert statements for Supabase.
 */

const fs = require('fs')
const path = require('path')

// Read Solano data
const solanoDataPath =
  '/Users/karljosebuena/Documents/personal/repos/bettersolano/data'
const services = JSON.parse(
  fs.readFileSync(path.join(solanoDataPath, 'services.json'), 'utf8')
)
const officials = JSON.parse(
  fs.readFileSync(path.join(solanoDataPath, 'officials.json'), 'utf8')
)
const ordinances = JSON.parse(
  fs.readFileSync(path.join(solanoDataPath, 'ordinances.json'), 'utf8')
)

// Helper function to escape SQL strings
function escapeSql(str) {
  if (!str) return 'NULL'
  return `'${str.replace(/'/g, "''").replace(/\r\n/g, ' ').replace(/\n/g, ' ')}'`
}

// Helper function to convert JSON to SQL
function jsonToSql(obj) {
  if (!obj) return 'NULL'
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`
}

// Transform services data
console.log('-- Services Data Migration\n')
console.log('-- Transforming Solano services to Ormoc format\n')

services.services.forEach((service) => {
  const slug = service.id
  const title = service.title.replace('Solano', 'Ormoc')
  const category = service.category
  const description = service.description
    ? service.description.replace('Solano', 'Ormoc')
    : null
  const requirements = service.keywords ? service.keywords : null
  const fees = service.fee || null
  const processingTime = service.processingTime || null
  const office = service.office
    ? service.office.replace('Solano', 'Ormoc')
    : null
  const contactInfo = null // Will be added later

  console.log(
    `INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES`
  )
  console.log(
    `  (${escapeSql(title)}, ${escapeSql(category)}, ${escapeSql(description)}, ${jsonToSql(requirements)}, ${escapeSql(fees)}, ${escapeSql(processingTime)}, ${escapeSql(office)}, ${jsonToSql(contactInfo)}, ${escapeSql(slug)});`
  )
  console.log('')
})

// Transform officials data
console.log('\n-- Officials Data Migration\n')
console.log('-- Transforming Solano officials to Ormoc format\n')

let orderIndex = 1

// Mayor
console.log(
  `INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES`
)
console.log(
  `  ('Hon. Lucy Torres-Gomez', 'City Mayor', 'Office of the Mayor', 'mayor@ormoc.gov.ph', '0927-400-8033', NULL, ${orderIndex++});`
)
console.log('')

// Vice Mayor
console.log(
  `INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES`
)
console.log(
  `  ('Hon. Leo Carmelo Locsin', 'City Vice Mayor', 'Office of the Vice Mayor', 'vicemayor@ormoc.gov.ph', '0916-284-0885', NULL, ${orderIndex++});`
)
console.log('')

// Councilors (using Solano structure as template)
officials.councilors.forEach(() => {
  const name = `Hon. Councilor ${orderIndex - 1}` // Placeholder names
  const position = 'Sangguniang Panlungsod Member'
  const department = 'Sangguniang Panlungsod'

  console.log(
    `INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES`
  )
  console.log(
    `  (${escapeSql(name)}, ${escapeSql(position)}, ${escapeSql(department)}, NULL, NULL, NULL, ${orderIndex++});`
  )
  console.log('')
})

// Transform ordinances
console.log('\n-- Ordinances Data Migration\n')
console.log('-- Using Solano ordinances as template for Ormoc\n')

ordinances.ordinances.forEach((ordinance) => {
  const number = ordinance.ordinanceNo
  const title = ordinance.title
    .replace('Solano', 'Ormoc')
    .replace('Municipality', 'City')
  const datePassed = ordinance.sessionDate || null
  const description = null
  const category = 'General'
  const status = 'active'

  console.log(
    `INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES`
  )
  console.log(
    `  (${escapeSql(number)}, ${escapeSql(title)}, ${escapeSql(datePassed)}, ${escapeSql(description)}, ${escapeSql(category)}, ${escapeSql(status)});`
  )
  console.log('')
})

console.log('\n-- Migration script complete!\n')
console.log(
  '-- Note: This is template data. Update with actual Ormoc information.\n'
)
