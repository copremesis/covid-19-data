#!/usr/bin/env ruby
require 'json'
require 'csv'
require 'awesome_print'

i = 0
data = CSV.parse(File.read(ARGV[0] || 'us-counties.csv'), headers: true).map {|row|
  i+=1
  row.to_hash.merge!("rate" => 100 * (row["deaths"].to_f/row["cases"].to_f),
                     "id" => 1000 + i)
}



column_names = data.first.keys
s=CSV.generate do |csv|
  csv << column_names
  data.each do |x|
    csv << x.values
  end
end
File.write('rate.csv', s)
