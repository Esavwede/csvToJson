
const fileToTransformPath = 'sample.csv'
const fileToTransformName = 'sample'

const {  createHash } = require('crypto')
const createCsv = require('csvtojson')
const { readFileSync, appendFileSync } = require('fs')


function generateHash( algo, content )
{
    try 
    {
        return createHash(algo).update(content).digest("hex")
    }
    catch(e)
    {
        console.log(' Error occured while generating sha256  hash ')
        console.log( e ) 
    }
}

async function convertCsvFileToJson( filePath )
{
    try 
    {
        
       const  generatedJson = await createCsv().fromFile( filePath)

       return generatedJson 
    }
    catch(e)
    {
        console.log(' Error occured while creating csv from file ')
        console.log( e ) 
    }
}

function divideLinesInFileIntoAnArray( filePath )
{
    try 
    {
        const fileSrc = readFileSync( filePath )
        const fileString = fileSrc.toString()
        const arrayFromFileString = fileString.split("\n")

        return arrayFromFileString
    }
    catch(e)
    {
        console.log(' Error occured while dividing lines in file into an array ')
        console.log( e  ) 
    }
}

function appendStringToCSVEntry( csvEntry, stringToAppend )
{
    try 
    {
        return csvEntry + stringToAppend 
    }
    catch(e)
    {
        console.log(' Error occured while modifying csv entry ')
        console.log( e ) 
    }
}

function writeArrayToCsv( array, filePath)
{
    try 
    {
       for( var i = 0; i < array.length; i++ )
       {
            appendFileSync(filePath, array[i] + "\n" )
       }
    }
    catch(e)
    {
        console.log(" Error occured while writing array to csv ")
        console.log( e ) 
    }
}

function transformCSV( count )
{
    for( var i = 1; i < count  ; i++ )
    {
        generatedArrayFromFile[i] = appendStringToCSVEntry( generatedArrayFromFile[i],`, ${jsonHash}`)
    }
    console.log( generatedArrayFromFile )
}


// Start 
const generatedJson = convertCsvFileToJson( fileToTransformPath ) 
const jsonHash = generateHash('sha256', generatedJson.toString() )
const generatedArrayFromFile = divideLinesInFileIntoAnArray( fileToTransformPath )

transformCSV( generatedArrayFromFile.length )
writeArrayToCsv( generatedArrayFromFile, fileToTransformName + '.output.csv' )