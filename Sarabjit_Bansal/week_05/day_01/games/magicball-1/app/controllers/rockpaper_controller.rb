class RockpaperController < ApplicationController
  def form
  end

  def lookup
    arr = {
      :rock => {:rock=>"win", :paper=>"lose", :scissors=>"win"},
      :paper => {:rock=>"win", :paper=>"win", :scissors=>"lose"},
      :scissors => {:rock=>"lose", :paper=>"win", :scissors=>"win"}
    }
    userchoice = params[:throw].downcase.to_sym
    compchoice = arr.keys.sample
    result = arr[userchoice][compchoice]

    @result1 =  "You #{result}!! as computer chose #{ compchoice } "


    # arr1 = arr.keys



      # arr=["rock","paper","scissors"]

      # #    userchoice = params[:throw].downcase
      #     @result = arr.keys.sample
      # @result1 = arr.userchoice[@result]
      # if userchoice == @result
      #   @result1 =  "You Won as computer chose #{ @result} "
      # elsif userchoice == "paper" && @result == "rock"
      #   @result1 ="You Won as computer chose #{ @result}"
      # elsif userchoice == "rock" && @result == "paper"
      #   @result1 ="You lose as computer chose #{ @result}"
      # elsif userchoice == "rock" && @result == "scissors"
      #   @result1 ="You Won as computer chose #{ @result}"
      # elsif userchoice == "scissors" && @result == "rock"
      #   @result1 ="You lose as computer chose #{ @result}"
      # elsif userchoice == "scissors" && @result == "paper"
      #   @result1 ="You Won as computer chose #{ @result}"
      # elsif userchoice == "paper" && @result == "scissors"
      #   @result1 ="You lose as computer chose #{ @result} "
      # end

    end
end
