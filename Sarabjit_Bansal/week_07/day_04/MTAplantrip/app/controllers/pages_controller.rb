class PagesController < ApplicationController
  def plannedtrip
    fromstation = params[:fromstation]
    tostation= params[:tostation]
    stl1 = fromstation.chars.first(5).join
    stl2= tostation.chars.first(5).join
    stst1 = fromstation.remove(stl1+":")
    stst2 = tostation.remove(stl2+":")

    plantrip(stl1,stst1,stl2,stst2)
      # raise "hell"
    plannedtrip = $journey
    render :plain =>  plannedtrip
  end

  def info
    fromstation = params[:fromstation]
    tostation= params[:tostation]
    stl1 = fromstation.chars.first(5).join
    stl2= tostation.chars.first(5).join
    stst1 = fromstation.remove(stl1+":")
    stst2 = tostation.remove(stl2+":")

    plantrip(stl1,stst1,stl2,stst2)
      # raise "hell"
    plannedtrip = $journey
    render :json => {
      :plannedtrip => plannedtrip
    }

  end

  def index
    # raise "hell"
      @path = {
       "LineN" => ['LineN:Times Square', 'LineN:34th', 'LineN:28th', 'LineN:23rd', 'LineN:Union Square', 'LineN:8th',
        'LineL:8th', 'LineL:6th', 'LineL:Union Square', 'LineL:3rd', 'LineL:1st',
        'Line6:Grand Central', 'Line6:33rd', 'Line6:28th', 'Line6:23rd', 'Line6:Union Square', 'Line6:Astor Place'],
     }
  end

private

$journey =''
$noofstops=0
$path = {
  "LineN" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "LineL" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "Line6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

def trackLoc firstIndex1, secIndex1, lineNo1
  if firstIndex1 > secIndex1
    i = firstIndex1
    while i >= secIndex1 do
      $journey += $path[lineNo1][i]
      $journey += ", "
      $noofstops += 1
      i -=1
    end
  else
     i = firstIndex1
      while i <= secIndex1 do
        $journey += $path[lineNo1][i]
        $journey += ", "
        $noofstops += 1
         i+=1
      end
  end
    # journey = journey.slice(0, -2);
end

def plantrip(startLine, startStop, endLine, endStop)


  instpoint = "Union Square"

  firstIndex = $path[startLine].index(startStop)
  secIndex = $path[endLine].index(endStop)
  # p firstIndex
  # p secIndex
# raise "hell"
  #  if starting and stopping point is same as intersection point i.e union square.
  if (startStop == instpoint && endStop == instpoint)
      $journey = "You are already at ${instpoint}. Change to Line: #{endLine}"
      # puts($journey);
  else
    if startLine == endLine
        $journey = "You must travel through the following stops on line #{startLine} :"
        trackLoc(firstIndex, secIndex, startLine);
    else
        $journey = "You must travel through the following stops on line #{startLine} :"
        instindex = $path[startLine].index(instpoint);
        trackLoc(firstIndex, instindex, startLine);
        instindex = $path[endLine].index(instpoint);
        if secIndex != instindex
          $journey += "\nChange at #{instpoint} to Line: #{endLine}.Your journey continues through the following stops:"
          if (instindex < secIndex)
            trackLoc(instindex + 1, secIndex, endLine)
          else
            trackLoc(instindex - 1, secIndex, endLine)
          end

        else
            $journey += " You are already at #{instpoint}. Change to Line: #{endLine}"
        end
    end
  end
  # puts"There are #{$noofstops} Stops in Total. #{$journey}"
end
# return $journey;
end
